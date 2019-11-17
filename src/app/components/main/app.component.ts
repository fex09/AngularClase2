import {
  Component
} from '@angular/core';

// Models
import {
  Product
} from 'src/app/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreAngular';

  public products: Product[];
  public selectedProduct: Product;
  public currentView: 'LIST'|'DETAILS' | 'ADD' | 'EDIT';

  constructor() {
    this.currentView = 'LIST';
    this.products = [];
    const p1 = new Product();
    p1.Id = 1;
    p1.Name = 'HP Envy';
    p1.Description = 'Laptop';
    p1.Image = 'https://dummyimage.com/100X100/000/fff';
    p1.Quantity = 3;
    p1.Price = 1000;

    const p2 = new Product();
    p2.Id = 2;
    p2.Name = 'Dell Inspiron';
    p2.Description = 'Laptop';
    p2.Image = 'https://dummyimage.com/100X100/000/fff';
    p2.Quantity = 5;
    p2.Price = 700;

    this.products.push(p1);
    this.products.push(p2);
  }

  public viewDetails(id: number): void {
    this.selectedProduct = this.products.find((product: Product) => {
      return product.Id === id;
    });
    this.currentView = 'DETAILS';
  }

  public viewEditDetails(id: number): void {
    this.selectedProduct = this.products.find((product: Product) => {
      return product.Id === id;
    });
    this.currentView = 'EDIT';
  }

  public back(): void {
    this.currentView = 'LIST';
  }

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public editProduct(pProduct: Product): void {
    let pEdit: Product;
    pEdit = this.products.find((product: Product) => {
      return product.Id === pProduct.Id;
    });
    pEdit.Description = pProduct.Description;
    pEdit.Image = pProduct.Image;
    pEdit.Name = pProduct.Name;
    pEdit.Price = pProduct.Price;
    pEdit.Quantity = pProduct.Quantity;
  }
}
