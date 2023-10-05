import { Component, inject } from '@angular/core';
import { MyfirstService } from '../services/myfirst.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent {
  public name:string="";
  email:string="";
  message:string="";
  isSubmitted:boolean=false;
  messages:Array<any>=[];

  

  constructor(private service:MyfirstService){
    
    this.messages=this.service.getAllMessages();
    this.isSubmitted=this.messages.length>0;
  }

onSubmit()
{
  this.isSubmitted=true
  this.service.insert({
    'name':this.name,
    'email':this.email,
    'message':this.message
  });
  console.log("added succesfully")

  




}
clear(){
  this.name="";
  this.email="";
  this.message="";
}

deleteMessage(index:number){
  this.service.deleteMessage(index);
  console.log('delete called')
}




}
