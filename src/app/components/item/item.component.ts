import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // Input and Output event to parent element( itemList )
  // Input and Output event to parent element( itemList )

  @Input() item!: IItem;
  @Output() deleteItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  // Emit the delete event to itemList
  onDelete() {
    this.deleteItemEvent.emit(this.item);
  }

}
