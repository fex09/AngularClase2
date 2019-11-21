import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() product: Product;
  @Output() onEditProduct = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  public saveProduct(): void {
    this.onEditProduct.emit(this.product);
    this.resetForm();
  }

  public resetForm(): void {
    // this.product = new Product();
  }

}
