import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './../templates/product-add.component.html'
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[0-9]*')
      ]),
      description: new FormControl('',[
        Validators.required,
      ]),
    });
  }
  handleSubmit(): void {
    let formData = this.productForm.value;
    let products: Product = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
    };
    this._ProductService.store(products).subscribe(() => {
      alert('Thêm Tour Thành Công');
      this._Router.navigate(['/product']);
    },e => {
        console.log(e);
      })
  }
}
