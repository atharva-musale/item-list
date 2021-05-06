import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IItem } from '../interfaces/item';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  private listOfItems: any[] = [];
  public numberOfItems = 0;
  private subject = new Subject<any>();
  public errorMessage = "";

  public getItems_url = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {
    this.getItems().subscribe((data) => {
      data.forEach((val)=>{
        this.addToItemList(val.name);
        console.log(val.name);
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

  addToItemList(itemName: any) {
    let temp = itemName;
    this.listOfItems = this.listOfItems.concat(temp);
    ++this.numberOfItems;
    console.log('Item Added');
    this.subject.next(this.listOfItems);
  }

  removeFromItemList(val: any) {
    --this.numberOfItems;
    // go through the list, if item is found, splice it
    this.listOfItems.forEach((item, index) => {
      if (item === val) this.listOfItems.splice(index, 1);
    });
    this.subject.next(this.listOfItems);
  }

  getItemList(): Observable<any> {
    return this.subject.asObservable();
  }

  getStaticItemList(){
    return this.listOfItems;
  }

  getNumberOfItems(){
    return this.numberOfItems;
  }

}
