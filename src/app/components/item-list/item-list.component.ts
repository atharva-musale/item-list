import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public listOfItems: any[] = [];
  subscription: Subscription;

  ngOnInit(): void {
  }

  deleteItem(event: any) {
    console.log(event);
    this._itemsService.removeFromItemList(event);
  }

  constructor(private _itemsService: ItemsService) {
    this.subscription = this._itemsService.getItemList().subscribe(itemList => {
      this.listOfItems = itemList;
      console.log(this.listOfItems);
    });
  }
}
