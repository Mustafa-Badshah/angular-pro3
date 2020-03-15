import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  product:any={
    product_title: "",
    product_price: "",
    product_discount: "",
    product_category: ""
  }
  constructor() { }

  @Output() productEvent = new EventEmitter;

  ngOnInit() {
  }

  add(){
    this.productEvent.emit(this.product);
  }

}
