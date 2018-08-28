export class InventoryList {
  public id: number;
  public sku: string;
  public quantity: number;
  public product: string;
  public location: string;
  public thresholdWarning: number;
  public thresholdCritical: number;
  public status: string;

  constructor(id: number, sku: string, quantity: number, product: string, location: string,
              thresholdWarning: number, thresholdCritical: number, status: string) {
          this.id = id;
          this.sku = sku;
          this.quantity = quantity;
          this.product = product;
          this.location = location;
          this.thresholdWarning = thresholdWarning;
          this.thresholdCritical = thresholdCritical;
          this.status = status;

  }


}
