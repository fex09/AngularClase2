import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Output() onViewDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public ViewDetails(id: number): void {
    this.onViewDetails.emit(id);
  }

}
