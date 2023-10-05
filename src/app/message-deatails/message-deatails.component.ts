import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-deatails',
  templateUrl: './message-deatails.component.html',
  styleUrls: ['./message-deatails.component.scss']
})
export class MessageDeatailsComponent {
  
  @Input()
  message : any =  {};
  @Input()
  index : number=-1;


 @Output()
  delete:EventEmitter<number>= new EventEmitter<number>();

  onDelete(){

    console.log("i want to delete");
    this.delete.emit(this.index)
  }

  
 
  
  
}
