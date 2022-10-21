import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-delete',
  templateUrl: './../templates/product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {
  products!: Product;
  id:any; 
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router,
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe((product) => {
        this.products = product;
        })
      })
  }
  handleYes(){
    this._ProductService.delete(this.id).subscribe(() => {
      this._Router.navigate(['/product']);
      alert('Xóa Tour Thành Công');
    }, (e: any) => {
      console.log(e);
    })
  }
}
