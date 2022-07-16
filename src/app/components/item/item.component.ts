import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  IItem,
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
  @Input() item!: IItem;

  /**
   * Emits when delete button is clicked
   */
  @Output() deleteItemEvent = new EventEmitter();

  constructor() { }

  /**
   * Emit the delete event to itemList
   */
  public onDelete() {
    this.deleteItemEvent.emit(this.item);
  }

}
