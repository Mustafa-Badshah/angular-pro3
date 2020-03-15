import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {



  
  constructor(private _product: ProductService) { }

  index: number;
  addProducts:any[];
  delproduct:any;
  // editproduct={
  //   product_title: "",
  //   product_price: "",
  //   product_category: "",
  //   product_discount: ""
  // }
  

  ngOnInit() {
    this._product.getProduct().subscribe(result=>{
      // console.log(result);
      this.addProducts = result;
    })
  }
  add(obj) {
    this._product.addProduct(obj).subscribe(result=>{
      // console.log(result);
      this.addProducts.push(result);
    });
  }
   askproduct(obj){
     this.delproduct= obj;
   }

  //  askEdit(a: any, n: number){
  //    this.addProducts = {... a};
  //    this.index = n
  //  }

   delete(){
     this._product.deleteProduct(this.delproduct._id).subscribe(result=>{
       let n = this.addProducts.indexOf(this.delproduct);
       this.addProducts.splice(n, 1);
     })
   }
   

  

}
