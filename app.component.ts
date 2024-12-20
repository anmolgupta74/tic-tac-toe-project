import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cells:string[]=Array(10).fill(null);
  playerSymbol:string='X';
  onGridCellClick(index:number):void{
this.cells[index]=this.playerSymbol;
if(this.playerSymbol=='X'){
  this.playerSymbol='O';
}else{
  this.playerSymbol='X';
}
  }
}
