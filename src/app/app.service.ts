import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url  = 'http://localhost:8000/register';
  url2 = 'http://localhost:8000/login';
  url3 = 'http://localhost:8000/landing'
  constructor(private http:HttpClient) { }

  
  getdata(obj:any):any{
     return this.http.post(this.url2,obj);
     
  }

  postdata(obj:any):any{
    return this.http.post(this.url,obj);
  }

  loggedin():any{
   return  !!localStorage.getItem('token')
  }

  getToken():any{
    return localStorage.getItem('token')
  }

  verifyToken():any{
    return this.http.get(this.url3)
  }
 
}
