import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'food-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: CardItem
  @Output() itemClicked: EventEmitter<CardItem> = new EventEmitter<CardItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked() {
    this.itemClicked.emit(this.item);
  }
}

export interface CardItem {
  id: string;
  name: string;
  picture: string;
  description: string;
}
