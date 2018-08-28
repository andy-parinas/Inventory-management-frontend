import { InventoryList } from './../../../models/inventory-list.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-list-item',
  templateUrl: './inventory-list-item.component.html',
  styleUrls: ['./inventory-list-item.component.css']
})
export class InventoryListItemComponent implements OnInit {

  @Input() inventory: InventoryList;

  constructor() { }

  ngOnInit() {
  }

}
