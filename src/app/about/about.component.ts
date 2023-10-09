import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepresentation } from '../services/api/products/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  param :any;
  course: any;
  lastname:any;
  constructor(private activatedRout:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.activatedRout)
    this.param=this.activatedRout.snapshot.params['username'];
    this.course=this.activatedRout.snapshot.queryParams['course']
    this.lastname=this.activatedRout.snapshot.queryParams['lastname']}
  

  

  

}
