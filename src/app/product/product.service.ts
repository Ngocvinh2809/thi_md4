import { Injectable } from '@angular/core';
import { Product } from './product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl+'/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private _HttpClient: HttpClient
  ) { }
  getAll():Observable<Product[]>{
    return this._HttpClient.get<Product[]>(apiUrl);
  }
  update(id: any, data:Product){
    return this._HttpClient.put<Product>(apiUrl+'/'+id, data);
  }
  store(data:Product){
    return this._HttpClient.post<Product>(apiUrl, data);
  }
  delete(id:any){
    return this._HttpClient.delete<Product>(apiUrl+'/'+id);
  }
  find(id:any){
    return this._HttpClient.get<Product>(apiUrl+'/'+id);
  }
}
