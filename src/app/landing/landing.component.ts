import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private appservice : AppService,private router:Router) { }

   verify() : any{
   this.appservice.verifyToken().subscribe(
    (res:any)=>{console.log(res)},
    (err:any)=>{this.router.navigate(['/home'])}
   )         
    }
   
  }

