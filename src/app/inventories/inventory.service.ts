import { Inventory } from './../models/inventory.model';
import { InventoryList } from './../models/inventory-list.model';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';


export class InventoryService {

  private inventories: Inventory[] = [
    new Inventory(1, '1bc1234567890', 100,
          new Product(1, 'Product1', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(2, '1bc1234567890', 100,
          new Product(2, 'Product2', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(3, '1bc1234567890', 100,
          new Product(3, 'Product3', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(4, '1bc1234567890', 100,
          new Product(4, 'Product4', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(5, '1bc1234567890', 100,
          new Product(5, 'Product5', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(6, '1bc1234567890', 100,
          new Product(6, 'Product6', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(7, '1bc1234567890', 100,
          new Product(7, 'Product7', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(8, '1bc1234567890', 100,
          new Product(8, 'Product8', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(9, '1bc1234567890', 100,
          new Product(9, 'Product9', 'ABC123456',
          'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(10, '1bc1234567890', 100,
          new Product(10, 'Product10', 'ABC123456'
          , 'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(11, '1bc1234567890', 100,
          new Product(11, 'Product11', 'ABC123456'
          , 'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(12, '1bc1234567890', 100,
          new Product(12, 'Product12', 'ABC123456'
          , 'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(13, '1bc1234567890', 100,
          new Product(13, 'Product13', 'ABC123456'
          , 'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(14, '1bc1234567890', 100,
          new Product(14, 'Product14', 'ABC123456'
          , 'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK'),
    new Inventory(15, '1bc1234567890', 100,
          new Product(15, 'Product15', 'ABC123456'
          , 'Product Description', 100, 'Category1'), 'Location 1', 50, 20, 'OK')
  ];
  private editMode = false;

  editModeChange = new Subject<boolean>();


  constructor() {}

  getInventories() {
    return this.inventories.slice();
  }

  getInventory(index: number) {
    return this.inventories[index];
  }

  changeEditModeTo(mode: boolean) {
    this.editMode = mode;
    this.editModeChange.next(this.editMode);
  }

  getEditMode() {
    return this.editMode;
  }

}

