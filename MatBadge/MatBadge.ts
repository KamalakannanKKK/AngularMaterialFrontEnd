import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  i:number =0;
  badgevisible=false;
add(){
  this.i=this.i+1
}
badgevisibility(){
  this.badgevisible=true;
  this.i=0;
}
}
