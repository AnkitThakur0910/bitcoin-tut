import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName ,Validator, Validators} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  backgroundUrl = 'assets/images/jievani-weerasinghe-NHRM1u4GD_A-unsplash.jpg'

  hide:any = true;
  constructor(private appService:AppService)
  {
    
  }

  forms:any  = new FormGroup({
    username: new FormControl('',Validators.required),
    gmail : new FormControl('',Validators.email),
    password : new FormControl('',Validators.required)
})
  senddata(formy:any):any {
   
    this.appService.postdata(formy.value).subscribe((res: any)=>{
      console.log(res);
      localStorage.setItem('token',res.token);
       },
       (err:any)=>{alert('Username already exists')})


    }
  }

