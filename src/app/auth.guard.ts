import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router} from '@angular/router';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private appservice : AppService,private router : Router,private activatedRoute : ActivatedRoute)
  {

  }
  canActivate():any{
      
    if(this.appservice.loggedin())
    {
        return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
