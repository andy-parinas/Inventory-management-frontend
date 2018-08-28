import { Product } from './product.model';

export class Inventory {

  public id: number;
  public sku: string;
  public quantity: number;
  public product: Product;
  public thresholdWarning: number;
  public thresholdCritical: number;

}
