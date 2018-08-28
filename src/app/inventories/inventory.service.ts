import { InventoryList } from './../models/inventory-list.model';


export class InventoryService {

  private inventories: InventoryList[] = [
    new InventoryList(1, '1bc1234567890', 100, 'Product 1', 'Location 1', 50, 20, 'OK'),
    new InventoryList(2, '1bc1234567890', 100, 'Product 2', 'Location 1', 50, 20, 'OK'),
    new InventoryList(3, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(4, '1bc1234567890', 100, 'Product 4', 'Location 1', 50, 20, 'OK'),
    new InventoryList(5, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(6, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(7, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(8, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(9, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(10, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(11, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(12, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(13, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(14, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK'),
    new InventoryList(15, '1bc1234567890', 100, 'Product 3', 'Location 1', 50, 20, 'OK')
  ];

  constructor() {}

  getInventories() {
    return this.inventories.slice();
  }


}

