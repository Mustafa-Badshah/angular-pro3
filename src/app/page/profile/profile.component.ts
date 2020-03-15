import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // user:any;
  user:any={
    f_name: "",
    u_name: "",
    email: "",
    city: "",
    contact: null,
    address: ""
  }
  constructor(private _profile: ProfileService) { }

  ngOnInit() {
    this._profile.getUser().subscribe(result=>{
      // console.log(result);
      this.user = result;
    },
    err=>{
      console.log(err);
    })
  }

  askEdit(obj:any){
    this.user = {... obj};
  }

  edit(obj:any ){
    console.log();
    this._profile.putUser(obj, obj._id).subscribe(result=>{
      this.user = result;
    })
  }


}
