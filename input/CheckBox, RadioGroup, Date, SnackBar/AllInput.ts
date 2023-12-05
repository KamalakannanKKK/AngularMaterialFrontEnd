import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog'
import { GridComponent } from '../grid/grid.component';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
options:string[]=["angualar","NodeJS","ReactJS"]
constructor(private snackBar:MatSnackBar,private dialog:MatDialog){}
openSnackbar(message:string,action:string){
 
 let s= this.snackBar.open(message,action);
 s.afterDismissed().subscribe(()=>{
 console.log("Successfully Submitted");
});
s.onAction().subscribe(()=>{
  console.log("Triggered")
});
}
openDialog():void{
    let s=this.dialog.open(GridComponent, {
      width: '1000px',height:'500px'
      
    });
    s.afterClosed().subscribe(()=>{
      console.log("WOrking");
    })
}
}
