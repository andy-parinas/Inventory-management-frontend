import { Router, ActivatedRoute } from '@angular/router';
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

  @Input() formTitle = '';
  @Input() readOnly = false;
  @Input() newForm = false;
  @Input() inventory: Inventory;

  inventoryForm: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.readOnly);
    this.initForm();
  }


  initForm() {

    let product = '';
    let quantity = 0;
    let sku = '';
    let status = '';
    let thresholdCritical = 0;
    let thresholdWarning = 0;
    let location = '';

    if (this.inventory !== undefined ) {
        product = this.inventory.product.name;
        quantity = this.inventory.quantity;
        sku = this.inventory.sku;
        status = this.inventory.status;
        thresholdCritical = this.inventory.thresholdCritical;
        thresholdWarning = this.inventory.thresholdWarning;
        location = this.inventory.location;
    }

    this.inventoryForm = new FormGroup({
        'product': new FormControl(product, Validators.required),
        'quantity': new FormControl(quantity, Validators.required),
        'sku': new FormControl(sku, Validators.required),
        'status': new FormControl(status, Validators.required),
        'thresholdCritical': new FormControl(thresholdCritical, Validators.required),
        'thresholdWarning': new FormControl(thresholdWarning, Validators.required),
        'location': new FormControl(location, Validators.required)
    });

  }

  onCancel() {
      if (this.newForm) {
        this.router.navigate(['../'], {relativeTo: this.route});
      }
      this.inventoryService.changeEditModeTo(false);
      this.initForm();
  }

}
