import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {




  constructor(private _http: HttpClient, private _login: LoginService ) { }

  getUser(){
    return this._http.get<any>("http://localhost:3000/api/getuser",{
      headers: { Authorization : this._login.gotToken()
      }
    });
  }
  putUser(obj: any, id: string){
    // console.log(obj)
    return this._http.put<any>("http://localhost:3000/api/edituser/"+id, obj,{
      headers: { Authorization : this._login.gotToken()
      }
    });

  }
}
