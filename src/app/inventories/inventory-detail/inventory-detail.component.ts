import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../../models/inventory.model';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  inventory: Inventory;
  inventoryId: number;
  readOnly = true;

  constructor(private router: Router, private route: ActivatedRoute,
              private inventoryService: InventoryService) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.inventoryId = +params['id'];
        this.inventory = this.inventoryService.getInventory(this.inventoryId - 1);
      });

      this.route.queryParams.subscribe((queryParams: Params) => {
        this.readOnly = queryParams['readOnly'] === '0' ? false : true;
      });

      this.readOnly = !this.inventoryService.getEditMode();
      this.inventoryService.editModeChange.subscribe((mode: boolean) => {
          this.readOnly = !mode;
      });

      console.log(this.inventoryService.getEditMode());
  }

  onBackToList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onEditItem() {
    this.readOnly = false;
  }

  onCancelEdit() {
    this.readOnly = true;
    this.inventoryService.changeEditModeTo(false);
  }


}
