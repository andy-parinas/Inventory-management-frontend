import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Inventory } from '../../models/inventory.model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {

  @Input() readOnly = false;
  @Input() newForm = false;
  @Input() inventory: Inventory;

  disabled = true;
  inventoryForm: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    console.log(this.inventory);
    this.inventoryForm = new FormGroup({
      'product': new FormControl(this.inventory.product.name, Validators.required),
      'quantity': new FormControl(this.inventory.quantity, Validators.required),
      'sku': new FormControl(this.inventory.sku, Validators.required),
      'status': new FormControl(this.inventory.status, Validators.required),
      'thresholdCritical': new FormControl(this.inventory.thresholdCritical, Validators.required),
      'thresholdWarning': new FormControl(this.inventory.thresholdWarning, Validators.required),
      'location': new FormControl(this.inventory.location, Validators.required)
    });

  }

  onCancel() {
    this.inventoryService.changeEditModeTo(false);
    // if (!this.newForm) {
    //   this.router.navigate(['inventories', this.inventory.id]);
    // }
    this.initForm();
  }

}
