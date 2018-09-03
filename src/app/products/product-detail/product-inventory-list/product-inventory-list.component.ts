import { Inventory } from './../../../models/inventory.model';
import { InventoryService } from './../../../inventories/inventory.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-inventory-list',
  templateUrl: './product-inventory-list.component.html'
})
export class ProductInventoryListComponent implements OnInit {

  inventories: Inventory[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
      this.inventories = this.inventoryService.getInventories();
  }


}
