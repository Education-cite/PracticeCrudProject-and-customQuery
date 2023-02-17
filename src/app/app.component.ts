import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentCrudProject';

  getTeachers:any
  

  

  constructor(private _studentservice:StudentService){this.getAllteacher()}

  register(registerForm:NgForm){
    this._studentservice.saveTeacher(registerForm.value).subscribe(
      (res)=>{
        console.log(res);
        registerForm.reset();
       // this.getAllteacher();
      }
    )
  }

  getAllteacher(){
    this._studentservice.getAllteacher().subscribe(
      (res)=>{
        console.log(res);
        this.getTeachers=res;

      }
    )
  }
  deleteTeacher(teacher:any){
    this._studentservice.deleteteacher(teacher.id).subscribe(
      (res:any)=>{
        this.getAllteacher();
      }
    )
  }


}
