import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "../model/category.interface"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  constructor(private _http: HttpClient) { }

  getCategory(){
    return this._http.get<any>("http://localhost:3200/api/information");
  }

  addCategory(obj){
    return this._http.post<any>("http://localhost:3200/api/information", obj);
  }

  putCategory(obj: Category, id : string){
    return this._http.put<any>("http://localhost:3200/api/information/"+id, obj)
  }

  deleteCategory(id){
    return this._http.delete<any>("http://localhost:3200/api/information/", id)
  }
}
