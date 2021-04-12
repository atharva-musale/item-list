import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private listOfItems: any[] = [];
  public numberOfItems: number;
  private subject = new Subject<any>();

  constructor() {
    this.numberOfItems = 0;
  }

  addToItemList(itemName: any) {
    this.listOfItems = this.listOfItems.concat(itemName.value);
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

}
