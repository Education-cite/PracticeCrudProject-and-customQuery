import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentCrudProject';

  constructor(private _studentservice:StudentService){}

  register(registerForm:any){
    this._studentservice.saveStudent(registerForm.value).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }
}
