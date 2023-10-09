import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepresentation } from '../services/api/products/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  @Input()
  product:ProductRepresentation={};

  constructor(
    private service:ProductService,
    private router:Router
    ){}

  saveProduct(){
    this.service.addProduct(this.product)
    .subscribe({
      next:(result)=>{
        this.router.navigate(['products'])
        


      }
    })


  }

}
