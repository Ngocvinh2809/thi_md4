import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './../templates/product-edit.component.html',
})
export class ProductEditComponent implements OnInit {
  productForm! : FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService:ProductService,
    private _Router:Router
  ) { }
    id:any;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');
        this.id = id;
        this._ProductService.find(id).subscribe(product => {
          this.productForm = new FormGroup({
            name: new FormControl(product.name,[
              Validators.required,
              Validators.minLength(3)
            ]),
            price: new FormControl(product.price,[
              Validators.required,
              Validators.minLength(5),
              Validators.pattern('[0-9]*')
            ]),
            description: new FormControl(product.description,[
              Validators.required,
            ]),
          });
        });
      });
  }
  handleSubmit():void {
    let ProductData:Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description
    }
    this._ProductService.update(this.id,ProductData).subscribe(product => {
      alert('Sửa Tour Thành Công');
      this._Router.navigate(['/product']);
      });;
  }
}
