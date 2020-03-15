import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Match } from '../../helper/match.navigation';
import { NumMatch } from 'src/app/helper/number.navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user: FormGroup;
  check= false;
  constructor(private _fb: FormBuilder, private _router: Router) {

    this.user=  this._fb.group({
      f_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      gender: ["", Validators.required],
      password: ["", Validators.required],
      repassword: ["", Validators.required],
      contact : ["", Validators.required]
    },
    {
      validator : [Match('password', 'repassword'), NumMatch('contact')]
     }
    );
   }

  ngOnInit() {
  }

  submit(){
    console.log("mustafa")
    this.check=true;
    if(this.user.invalid){
      return false
    }
    // console.log(this.user.value);
    this.user.value;
    this._router.navigate[("/login")];
  }

}
