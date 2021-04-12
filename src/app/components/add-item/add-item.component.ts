import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private _itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  clickEvent(itemName: any) {
    console.log('Button Clicked.');
    if (itemName.value == "") {
      alert("Enter a valid Item name.");
    }
    else {
      this._itemsService.addToItemList(itemName);
      itemName.value = "";
    }
  }

}
