import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {




  constructor(private _http : HttpClient) { }

  // getProduct(id=""){
  //   if(id=="")
  //   return this._http.get<any>("http://localhost:3200/api/information");
  //   else
  //   return this._http.get<any>("http://localhost:3200/api/information"+id);
  // }
  getProduct(){
    return this._http.get<any>("http://localhost:3200/api/information");
  }
   

  addProduct(obj) {
    return this._http.post<any>("http://localhost:3200/api/information",obj);
  }

  editProduct(id,obj){
    return this._http.put<any>("http://localhost:3200/api/information/"+obj.id, obj);
  }
  
  deleteProduct(id){
    return this._http.delete<any>("http://localhost:3200/api/information/"+id);
  }
}
