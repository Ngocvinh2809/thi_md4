import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add.component';
import { ProductComponent } from './components/product.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductShowComponent } from './components/product-show.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'delete/:id', component: ProductDeleteComponent},
  {path:':id', component: ProductShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
