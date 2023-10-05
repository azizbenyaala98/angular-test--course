import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.activatedRout)
    this.param=this.activatedRout.snapshot.params['username'];
    this.course=this.activatedRout.snapshot.queryParams['course']
    this.lastname=this.activatedRout.snapshot.queryParams['lastname']
    throw new Error('Method not implemented.');
  }
  constructor(private activatedRout:ActivatedRoute){

  }
  param :any;
  course: any;
  lastname:any;
  


}
