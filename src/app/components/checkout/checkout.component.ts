import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { take } from 'rxjs/operators';
import { calculateTotalCost } from 'src/app/helpers/item.helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  /**
   * Total number of items
   */
  public numOfItems = 0;

  /**
   * Cost of the items
   */
  public costOfItems = 0;

  /**
   * List of subscriptions to unsuscribe on destroy
   */
   private subscriptions: Subscription[] = [];

  constructor(private _itemsService: ItemsService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this._itemsService.itemList$.subscribe((items) => {
        console.log('List of items: ', items);
        this.numOfItems = items.length;
        this.costOfItems = calculateTotalCost(items);
      })
    );
    console.log('Number of items: ', this.numOfItems);
    console.log('Cosr of items: ', this.costOfItems);
  }

  /**
   * To handle checkout click event
   */
  public onCheckout() {
    console.log("Checkout clicked");
  }

}
