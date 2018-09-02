import { Product } from './product.model';

export class Inventory {

  public id: number;
  public sku: string;
  public quantity: number;
  public product: Product;
  public thresholdWarning: number;
  public thresholdCritical: number;
  public status: string;
  public location: string;

  constructor(id: number, sku: string, quantity: number,
              product: Product, location: string, thresholdWarning: number,
              thresholdCritical: number, status: string) {

      this.id = id;
      this.sku = sku;
      this.quantity = quantity;
      this.product = product;
      this.location = location;
      this.thresholdWarning = thresholdWarning;
      this.thresholdCritical = thresholdCritical;
      this.status = status;

  }

  constructor() {
    this.id = 0;
    this.sku = '';
    this.quantity = 0;
    this.product = new Product(0, '', '', '', 0, '');
    this.thresholdWarning = 0;
    this.thresholdCritical = 0;
    this.status = '';
    this.location = '';
  }

}
