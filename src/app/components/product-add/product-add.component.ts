import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Models
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Output() onSaveProduct = new EventEmitter<Product>();
  public product: Product;

  constructor() {
    this.product = new Product();
  }

  ngOnInit() {
  }

  public saveProduct(): void {
    this.onSaveProduct.emit(this.product);
    this.resetForm();
  }

  public resetForm(): void {
    this.product = new Product();
  }

}
