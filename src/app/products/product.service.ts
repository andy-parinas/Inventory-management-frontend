import { Product } from './../models/product.model';


export class ProductService {

  private products: Product[] = [
    new Product(0, 'Product 1', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(1, 'Product 2', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(2, 'Product 3', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(3, 'Product 4', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(4, 'Product 5', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(5, 'Product 6', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(6, 'Product 7', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(7, 'Product 8', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(8, 'Product 9', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(9, 'Product 10', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(10, 'Product 11', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(11, 'Product 12', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(12, 'Product 13', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(13, 'Product 14', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(14, 'Product 15', 'UPC123456789', 'Product Description', 100, 'Category 1'),
    new Product(15, 'Product 16', 'UPC123456789', 'Product Description', 100, 'Category 1'),
  ];


  getProducts() {
    return this.products.slice();
  }

}

