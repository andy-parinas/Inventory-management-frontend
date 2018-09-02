export class Product {

  public id: number;
  public upc: string;
  public name: string;
  public description: string;
  public price: number;
  public category: string;

  constructor(id: number, name: string, upc: string, description: string, price: number, category: string ) {
    this.id = id;
    this.name = name;
    this.upc = upc;
    this.description = description;
    this.price = price;
    this.category = category;
  }

}
