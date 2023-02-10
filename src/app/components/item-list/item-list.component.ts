import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ItemsService,
} from 'src/app/services/items.service';
import {
  Observable,
  Subscription,
} from 'rxjs';
import {
  Item,
} from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  /**
   * List of items
   */
  public listOfItems$: Observable<Item[]>;

  /**
   * List of subscriptions to unsuscribe on destroy
   */
  private subscriptions: Subscription[] = [];

  constructor(private _itemsService: ItemsService) {
    this.listOfItems$ = this._itemsService.itemList$;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this._itemsService.itemList$.subscribe((items) => {
        console.log('Items in itemList: ', items);
      })
    )
  }

  /**
   * To delete item from service
   *
   * @param item item to be deleted
   */
  public deleteItem(item: any ) {
    this._itemsService.deleteItem(item);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
