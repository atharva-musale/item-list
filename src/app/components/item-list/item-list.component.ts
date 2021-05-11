import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription } from 'rxjs';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public listOfItems: IItem[] = [];
  subscription: Subscription;

  ngOnInit(): void {
    this.listOfItems = this._itemsService.getStaticItemList();
    console.log(this.listOfItems);
  }

  deleteItem(event: any) {
    this._itemsService.deleteItem(event).subscribe((res) => {
      console.log(res);
    });
  }

  constructor(private _itemsService: ItemsService) {
    this.subscription = this._itemsService.getItemList().subscribe(itemList => {
      this.listOfItems = itemList;
    });
  }
}
