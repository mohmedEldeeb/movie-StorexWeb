import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private authService:ApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return token
     let auth = this.authService.getToken()
 
     // set token headers
     let tokenReq = req.clone({
       setHeaders:{
         Authorization:`Bearer ${auth}`
       }
     })
     return next.handle(tokenReq)
 
   }
}
