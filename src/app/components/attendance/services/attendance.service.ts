import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private url = environment.apiURL;

  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${environment.token}`
    })};


  constructor(private HttpClient: HttpClient) { }

  findbyIdActivity(idActivity: any){
    return this.HttpClient.get<any>(`${this.url}/api/transaccionalData/Actividad/${idActivity}`, this.httpOptions);
  }

  create(attendance: any){
    return this.HttpClient.post(`${this.url}/v1/attendance`, attendance, this.httpOptions)
  }

  listActivities(id:any){
    return this.HttpClient.get(`${this.url}/api/asignation/programs/idPrograms/${id}`, this.httpOptions)
  }
  

  listPrograms(){
    return this.HttpClient.get(`http://localhost:9898/v1/programs/list`)
  }


}
