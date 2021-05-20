import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IItem } from '../interfaces/item';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  private listOfItems: IItem[] = [];
  private numberOfItems = 0;
  private costOfItems = 0;
  private subject = new Subject<any>();
  public errorMessage = "";

  public getItems_url = 'http://localhost:3000/api/items';
  public postItems_url = 'http://localhost:3000/api/items';
  public postSingleItem_url = 'http://localhost:3000/api/item';

  constructor(private http: HttpClient) {
    this.getItems().subscribe((data) => {
      data.forEach((val) => {
        this.addToItemList(val);
      });
    },
      error => this.errorMessage = error);
  }

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.getItems_url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

  createObject(itemName: any) {
    let newItem = {
      id: this.listOfItems.length + 1,
      name: itemName,
      cost: 100
    }
    return newItem;
  }

  addToItemList(newItem: IItem) {
    ++this.numberOfItems;
    this.costOfItems += newItem.cost;
    console.log(this.costOfItems);
    this.listOfItems.push(newItem);
    this.subject.next(this.listOfItems);

    const headers = { 'content-type': 'application/json' }
    let json_newItem = JSON.stringify(newItem);
    return this.http.post(this.postSingleItem_url, json_newItem, { "headers": headers });
  }

  deleteItem(itemToDelete: IItem) {
    --this.numberOfItems;
    // go through the list, if item is found, splice it
    this.listOfItems.forEach((item, index) => {
      if (item.id === itemToDelete.id) this.listOfItems.splice(index, 1);
    });
    this.subject.next(this.listOfItems);

    var del_url = `http://localhost:3000/api/items/${itemToDelete.id}`;
    return this.http.delete(del_url);
  }

  getStaticItemList(): IItem[] {
    return this.listOfItems;
  }

  getNumberOfItems(): number {
    return this.numberOfItems;
  }

  getItemList(): Observable<any> {
    return this.subject.asObservable();
  }

  getCostOfItems(): number {
    return this.costOfItems;
  }

  sendItemListToBackend(): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    console.log('Send this to backend: ');
    let json_listOfItemObjects = JSON.stringify(this.listOfItems);
    return this.http.post(this.postItems_url, json_listOfItemObjects, { "headers": headers });
  }

}
