import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';
// import { Input } from '@angular/core';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  @Input() userprofile:any;
  @Output() userEvent = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.userEvent.emit(this.userprofile);
  }

}
