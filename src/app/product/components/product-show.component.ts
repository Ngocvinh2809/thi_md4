import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-show',
  templateUrl: './../templates/product-show.component.html',
})
export class ProductShowComponent implements OnInit {
  product!:Product;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this._ProductService.find(id).subscribe(products => {
        this.product = products;
      });
    });
  }
}
