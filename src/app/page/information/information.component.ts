import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  students:any[];
  delStudent:any;
  constructor(private _student: StudentService) { }

  ngOnInit() {
    this._student.getStudent().subscribe(result=>{
      // console.log(result)
      this.students = result;
    });
  }
  add(obj){
    this._student.addStudent(obj).subscribe(result =>{
      this.students.push(result);
    });
  }

  askDelete(obj){
    this.delStudent = obj; 
    
  }
  delete(){
    this._student.deleteStudent(this.delStudent._id).subscribe(result=>{
      // console.log("**********",result);
      let n = this.students.indexOf(this.delStudent);
      this.students.splice(n, 1);
    })
  }
 

}
