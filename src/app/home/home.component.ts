import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  
  constructor(private route : ActivatedRoute,private router : Router) { 
    
  }
  
 
  // arrow function uses callback function for this operator because arrow function bind this

  interval:any;
 
  ngOnInit(): void {
   
  }

  childa(){
     this.router.navigate(['register'],{relativeTo : this.route})
  }
  childb(){
    this.router.navigate(['login'],{relativeTo : this.route})
 }

  ngOnDestroy(): void{
    clearInterval(this.interval)

  }

}
