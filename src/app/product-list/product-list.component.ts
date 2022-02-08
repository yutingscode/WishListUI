import { Component, OnInit,OnChanges} from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.items';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
    products:any = [];
    submissionForm = this.formBuilder.group({
      name: '',
      price: '',
      link: '',
      note: ''
    })

    constructor(
      private productService: ProductService,
      private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.loalAllProducts();
    }

    ngOnChanges(): void {
    }

    private loalAllProducts() {
      this.productService
      .get()
      .then((result) => {
        console.log("===================="+result);
        this.products = result;
      });
    }

    deleteAProduct(id: string) {
      this.productService.delete(id).then(() => this.loalAllProducts());
    }

    onSubmit(): void {
      const prod = new Product(
        this.submissionForm.value['name'], 
        this.submissionForm.value['price'],
        this.submissionForm.value['link'],
        this.submissionForm.value['note']);
      this.productService.add(prod).then(() => this.loalAllProducts());
      this.submissionForm.reset();
    }
}
