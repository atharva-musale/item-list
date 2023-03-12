import {
  Injectable,
} from '@angular/core';
import {
  BehaviorSubject,
} from 'rxjs';
import {
  createNewItem,
} from 'src/app/helpers';
import {
  Item,
} from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  /**
   * List of items
   */
  private listOfItems: Item[] = [];

  /**
   * list of items as a subject so that when new item is added it's done centerally
   */
  private itemListSubject$ = new BehaviorSubject<Item[]>([]);
  public itemList$ = this.itemListSubject$.asObservable();

  constructor() {}

  /**
   * Creates and stores the item
   *
   * @param itemName name of the item
   */
  public addToItemList(itemName: string) {
    const newItem = createNewItem(this.listOfItems.length + 1, itemName);
    this.listOfItems.push(newItem);
    this.itemListSubject$.next(this.listOfItems);
  }

  /**
   * Deletes the item
   *
   * @param itemToDelete
   */
  public deleteItem(itemToDelete: Item) {
    this.listOfItems.forEach((item, index) => {
      if (item.id === itemToDelete.id) {
        this.listOfItems.splice(index, 1);
      }
    });
    this.itemListSubject$.next(this.listOfItems);
  }
}
