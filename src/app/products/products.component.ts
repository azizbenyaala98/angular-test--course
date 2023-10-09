import { HttpErrorResponse } from '@angular/common/http';
import { Component ,Input, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/products/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit { 
  products:ProductRepresentation[]=[];
  constructor(
    private service:ProductService
  ){
  
  }



   ngOnInit(): void {

  
  this.service.getAllProductswithLimit()
  .subscribe({
    next:(data: any)=>{
      this.products=data
    

    
  }});
  const product :ProductRepresentation={
    title:'title test',
    description:'description test',
    price:30,
    category:'any category',
    image:'test image'
  }

  this.service.addProduct(product)
  .subscribe({
    next:(result: any)=>{
    console.log(result);},
    error:(error :HttpErrorResponse)=>{
      console.log(error );
      

    }

    
    
  });

  throw new Error('Method not implemented.');
}




  };


