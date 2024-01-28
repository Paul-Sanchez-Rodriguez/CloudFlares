import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ViewAttendanceService {


  private url = `${environment.apiURL}`;

  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${environment.token}`
    })};

  
  constructor(private HttpClient: HttpClient) { }

  findbyIdActivity(idActivity: any){
    return this.HttpClient.get<any>(`${this.url}/v1/attendance/view/${idActivity}`, this.httpOptions);
  }

}
