import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor,HttpHandler, HttpRequest } from '@angular/common/http';
import { AppService } from './app.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector) { }

  // we use injector to use auth service
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let authservice = this.injector.get(AppService)
    let tokenized_req = req.clone(
      {
        setHeaders:{
          Authorization : `Bearer ${authservice.getToken()}`
        }
      }
    )
    return next.handle(tokenized_req)
  }
}
