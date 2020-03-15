import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {




  constructor(private _http: HttpClient, private _router: Router) { }
  doLogin(obj:any){
    return this._http.post<any>("http://localhost:3000/api/auth", obj);
  }
  
  isLoggedIn() {
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }
  gotToken() {
    // return localStorage.getItem("token");
    // let newToken = atob(localStorage.getItem("token"));
    // return newToken;
    let newToken = atob(localStorage.getItem("token"));
    return newToken
  }
  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
}

