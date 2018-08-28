import { InventoryList } from './../../models/inventory-list.model';
import { InventoryService } from './../inventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventories: InventoryList[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getInventories();
    console.log(this.inventories);
  }


  onRowClick(index: number) {
    console.log(index);
  }
}
