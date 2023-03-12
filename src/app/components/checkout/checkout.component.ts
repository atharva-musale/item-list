import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  ItemsService,
} from 'src/app/services/items-service/items.service';
import {
  calculateTotalCost,
} from 'src/app/helpers';
import {
  Observable,
} from 'rxjs';
import {
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {
  /**
   * Cost of all items
   */
  public totalCostOfItems$: Observable<number>;

  constructor(private itemsService: ItemsService) {
    this.totalCostOfItems$ = this.itemsService.itemList$.pipe(map(listOfItems => calculateTotalCost(listOfItems)));
  }

  /**
   * To handle checkout click event
   */
  public onCheckout() {
    console.log("Checkout clicked");
  }
}
