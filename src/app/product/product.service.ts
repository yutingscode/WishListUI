import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.items';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductService {

  // server url
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // get products
  async get() {
    return await lastValueFrom(this.http.get(this.url));
  }

  // add products
  async add(prod: Product) {
    return await lastValueFrom(this.http.post(this.url, prod));
  }

  // delete products
  async delete(id: string) {    
    return await lastValueFrom(this.http.delete(`${this.url}/${id}`));
  }



}

