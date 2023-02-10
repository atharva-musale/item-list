import {
  Injectable,
} from '@angular/core';
import {
  BehaviorSubject,
} from 'rxjs';
import {
  take,
} from 'rxjs/operators';
import {
  Item,
} from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  /**
   * list of items as a subject so that when new item is added it's done centerally
   */
  private itemList = new BehaviorSubject<Item[]>([]);
  public itemList$ = this.itemList.asObservable();

  constructor() {}

  /**
   * Creates and stores the item
   *
   * @param itemName name of the item
   */
  public addToItemList(itemName: string) {
    this.itemList$.pipe(take(1)).subscribe((items) => {
      const newItem = {
        id: items.length + 1,
        name: itemName,
        cost: 100
      };
      items.push(newItem);
      this.itemList.next(items);
    });
  }

  /**
   * Deletes the item
   *
   * @param itemToDelete
   */
  public deleteItem(itemToDelete: Item) {
    this.itemList$.pipe((take(1))).subscribe((items) => {
      items.forEach((item, index) => {
        if (item.id === itemToDelete.id) {
          items.splice(index, 1);
        }
      });
      this.itemList.next(items);
    });
  }
}
