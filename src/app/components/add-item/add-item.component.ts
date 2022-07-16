import {
  Component,
} from '@angular/core';
import {
  ItemsService,
} from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {

  constructor(private _itemsService: ItemsService) { }

  /**
   * Triggered on add item, adds item to the list in service
   *
   * @param itemName input field to get the current value
   */
  public addItemClickEvent(itemName: HTMLInputElement) {
    if (itemName.value == "") {
      alert("Enter a valid item name.");
    }
    else {
      this._itemsService.addToItemList(itemName.value);
      itemName.value = "";
    }
  }

}
