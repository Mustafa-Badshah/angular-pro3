import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user={
    email: "",
    password: ""
  };
  message:string;

  constructor(private _login : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
    this._login.doLogin(this.user).subscribe(result=>{
      // console.log("-------", result);
      let newToken = btoa(result.token);
      localStorage.setItem("token", newToken);
      // localStorage.setItem("token", result.token);
      this._router.navigate(["/profile"]);
    },
    err=>{
      // console.log("********", err);
      this.message=err.error.msg;
    
    })

  }

}

