import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import {
  ItemsService,
} from 'src/app/services/items-service/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent {
  /**
   * List of items
   */
  public listOfItems$: Observable<Item[]>;

  constructor(private _itemsService: ItemsService) {
    this.listOfItems$ = this._itemsService.itemList$;
  }

  /**
   * To delete item from service
   *
   * @param item item to be deleted
   */
  public deleteItem(item: Item) {
    this._itemsService.deleteItem(item);
  }
}
