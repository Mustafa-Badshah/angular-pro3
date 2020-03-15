import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  student={
    name : "",
    age : null,
    city : "",
    gender: "",
    address: ""
  }
  @Output() studentEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.studentEvent.emit(this.student);
  }

}
