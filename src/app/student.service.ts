import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:8080/api';

public saveTeacher(teacherData:any){
return this.http.post(this.baseUrl + '/saveTeacher',teacherData)
}


public getAllteacher(){
  return this.http.get(this.baseUrl + '/getAllteacher')
  }


  public deleteteacher(id:any){
    return this.http.delete(`${this.baseUrl}/deleteteacher/${id}`)
    }


}
