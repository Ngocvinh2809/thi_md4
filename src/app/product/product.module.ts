import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductShowComponent } from './components/product-show.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductEditComponent,
    ProductDeleteComponent,
    ProductShowComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
