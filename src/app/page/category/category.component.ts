import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  addCategory:Category[];
  category:Category={
    category_name: ""
  }
  index:number;

  constructor(private _Category: CategoryService) { }

  ngOnInit() {
    this._Category.getCategory().subscribe(result=>{
      // console.log(result)
      this.addCategory = result;
    });
  }
  add(obj:Category){
    if(obj._id){
      this._Category.putCategory(obj, obj._id).subscribe(result=>{
        // console.log(result);
        this.addCategory[this.index]= this.category;
      });
    } else {
      this._Category.addCategory(obj).subscribe(result=>{
        // console.log("?***********",result)
        this.addCategory.push(result);
      })
    }
  }

  askEdit(obj: Category){
    this.index = this.addCategory.indexOf(obj);
    this.category = {... obj}; 
  }

}
