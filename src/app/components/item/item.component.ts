import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // item from itemlist
  @Input() item: any;

  // Output the delete event to itemList
  @Output() deleteItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  // Emit the delete event to itemList
  onDelete() {
    this.deleteItemEvent.emit(this.item);
  }

}
