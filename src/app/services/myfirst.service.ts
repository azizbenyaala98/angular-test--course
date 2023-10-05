import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyfirstService {
  messages :Array<any>=[]

  constructor() { 
    this.init();
  }

  init(){
    this.insert({name:'aziz',email:'azizbenyaala@gmail.com',message:'this is init1'});
    this.insert({name:'aziz2',email:'azizbenyaala@gmail.com2',message:'this is init2'});
    this.insert({name:'aziz3',email:'azizbenyaala@gmail.com3',message:'this is init3'});
    

  }
  insert(message:{name:string,email:string,message:string}){
    this.messages.push(message);

  }
  getAllMessages(){
    return this.messages;
  }
  deleteMessage(index:number){
    this.messages.splice(index,1)

  }
}
