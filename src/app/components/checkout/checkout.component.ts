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
  subscription: Subscription;


  ngOnInit(): void {
    this.numOfItems = this._itemsService.getNumberOfItems();
    console.log("Num of items in checkout", this.numOfItems);
  }

  constructor(private _itemsService: ItemsService) {
    this.subscription = this._itemsService.getItemList().subscribe(() => {
      this.numOfItems = _itemsService.numberOfItems;
    });
  }

}
