import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  Item,
} from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  /**
   * Details of input from parent
   */
  @Input()
  public item?: Item;

  /**
   * Emits when delete button is clicked
   */
  @Output()
  private deleteItemEvent = new EventEmitter();

  constructor() { }

  /**
   * Emit the delete event to itemList
   */
  public onDelete() {
    this.deleteItemEvent.emit(this.item);
  }

}
