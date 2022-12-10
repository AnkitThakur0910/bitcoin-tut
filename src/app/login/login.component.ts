
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl,FormGroup ,FormControlName,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  backgroundUrl = 'assets/images/jievani-weerasinghe-NHRM1u4GD_A-unsplash.jpg';
  hide:boolean = true;
  constructor(private appservice : AppService) { }

  ngOnInit(): void {
    
  }
   
  formd:any = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  tokens(form:any):any
  {
    this.appservice.getdata(form.value).subscribe((res:any)=>{
      localStorage.setItem('token',res.token)
  }
    ,
       (err:any)=>{console.log(err); alert("Enter valid credentials")}


  )}

 


}
