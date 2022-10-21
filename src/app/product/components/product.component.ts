import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './../templates/product.component.html',
})
export class ProductComponent implements OnInit {
  products: Product[]=[];
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this._ProductService.getAll().subscribe(res =>{
      this.products = res;
    });
  }
}
