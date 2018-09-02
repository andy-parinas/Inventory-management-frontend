import { Inventory } from './../../models/inventory.model';
import { InventoryList } from './../../models/inventory-list.model';
import { InventoryService } from './../inventory.service';
import { Component, OnInit } from '@angular/core';
import { PageModel } from '../../models/page.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventories: Inventory[];
  pageModel: PageModel;

  constructor(private inventoryService: InventoryService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getInventories();
    this.pageModel = new PageModel(10, 1, 15, 150);
    console.log(this.inventories[1].product.name);
  }


  onItemSelected(itemId: number) {
    this.inventoryService.changeEditModeTo(false);
    this.router.navigate([itemId], {relativeTo: this.route});
  }

  onItemEdit(itemId: number) {
    // this.router.navigate([itemId], {relativeTo: this.route, queryParams: {readOnly: '0'}});
    this.inventoryService.changeEditModeTo(true);
    this.router.navigate([itemId], {relativeTo: this.route});
  }

  onItemDelete(itemId: number) {

  }


}
