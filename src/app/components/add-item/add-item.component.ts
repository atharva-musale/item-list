import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ItemsService,
  MessagePanelService,
} from 'src/app/services';
import {
  EMPTY_INPUT_MESSAGE,
  ITEM_ADDED_MESSAGE,
} from 'src/assets/default-messages';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddItemComponent {

  constructor(private itemsService: ItemsService, private messagesService: MessagePanelService) { }

  /**
   * Triggered on add item, adds item to the list in service
   *
   * @param itemName input field to get the current value
   */
  public addItemClickEvent(itemName: HTMLInputElement) {
    if (itemName.value == "") {
      this.messagesService.pushMessage(EMPTY_INPUT_MESSAGE);
    } else {
      this.itemsService.addToItemList(itemName.value);
      itemName.value = "";
      this.messagesService.pushMessage(ITEM_ADDED_MESSAGE);
    }
  }
}
