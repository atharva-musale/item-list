import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';
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
      let newItem: IItem = this._itemsService.createObject(itemName.value);
      this._itemsService.addToItemList(newItem).subscribe((res) => {
        console.log(res);
      });
      itemName.value = "";
    }
  }

}
