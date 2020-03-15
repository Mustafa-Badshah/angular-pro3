import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class StudentService {






  constructor(private _http : HttpClient) { }


getStudent(id=""){
  if(id=="")
  return this._http.get<any>("http://localhost:3200/api/information");
  else
  return this._http.get<any>("http://localhsot:3200/api/information"+id);
}
addStudent(obj) {
  return this._http.post<any>("http://localhost:3200/api/information", obj);
}
editStudent(id,obj){
  return this._http.put<any>("http://localhost:3200/api/information/"+id, obj);
}
deleteStudent(id){
  return this._http.delete<any>("http://localhost:3200/api/information/"+id);
}
}
