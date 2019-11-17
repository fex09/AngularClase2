import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Output() onEditProduct = new EventEmitter<Product>();
  @Input() product: Product;
  public lproduct: Product;

  constructor() {
  }

  ngOnInit() {
  }

  public loadProduct(): void {
    this.lproduct.Id = this.product.Id;
    this.lproduct.Description = this.product.Description;
    this.lproduct.Image = this.product.Image;
    this.lproduct.Name =  this.product.Name;
    this.lproduct.Quantity = this.product.Quantity;
    this.lproduct.Price = this.product.Price;
  }

  public saveProduct(): void {
    this.onEditProduct.emit(this.product);
    this.resetForm();
  }

  public resetForm(): void {
    this.product = new Product();
  }

}
