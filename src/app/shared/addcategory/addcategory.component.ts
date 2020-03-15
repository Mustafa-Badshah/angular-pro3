import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category.interface';
import { Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  // category:Category[];
  @Input() category:Category;
  @Output() categoryEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.categoryEvent.emit(this.category);
  }


}
