import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

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

  productEditForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productEditForm = this.formsBuilder.group({
      Id: this.formsBuilder.control(this.product.Id,[Validators.required, Validators.minLength(1)]),
      name: this.formsBuilder.control(this.product.Name,[Validators.required, Validators.maxLength(50)]),
      description: this.formsBuilder.control(this.product.Description,[Validators.required,Validators.maxLength(4000)]),
      image: this.formsBuilder.control(this.product.Image,[Validators.required, Validators.maxLength(100)]),
      quantity: this.formsBuilder.control(this.product.Quantity,[Validators.required, Validators.minLength(0)]),
      price: this.formsBuilder.control(this.product.Price,[Validators.required, Validators.maxLength(0)]),
    });
  }

  public saveProduct(): void {
    if (this.productEditForm.invalid) {
      alert('Product Invalid!');
      return;
    }
    this.product.Id = this.productEditForm.get('Id').value;
    this.product.Name = this.productEditForm.get('name').value;
    this.product.Description = this.productEditForm.get('description').value;
    this.product.Image = this.productEditForm.get('image').value;
    this.product.Quantity = this.productEditForm.get('quantity').value;
    this.product.Price = this.productEditForm.get('price').value;
    this.onEditProduct.emit(this.product);
    this.resetForm();
  }

  public resetForm(): void {
    this.product = new Product();
  }

}
