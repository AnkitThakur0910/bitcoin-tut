import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor()
  {
    
  }
  
  active(value:any)
  {
    var val = parseInt(value);
    var elevate = document.getElementsByClassName('elev')[val] as HTMLDivElement;
    for(var i=0;i<document.getElementsByClassName('elev').length;i++)
    {
      let v =document.getElementsByClassName('elev')[i] as HTMLDivElement;
      v.style.backgroundColor = "orange"
    }
    elevate.style.backgroundColor = "black";
  }


 
}

