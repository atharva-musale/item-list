import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public numOfItems = 0;
  public costOfItems = 0;

  ngOnInit(): void {
    this._itemsService.getItemList().subscribe(() => {
      this.numOfItems = this._itemsService.getNumberOfItems();
      this.costOfItems = this._itemsService.getCostOfItems();
    });
  }

  constructor(private _itemsService: ItemsService) { }

  onCheckout() {
    console.log("Checkout clicked");
  }

}
