import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BulkAllocationService {

  constructor(private http: HttpClient) {}

  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${environment.token}`
    })};

  private url = environment.apiURL;


  findAll() {
    return this.http.get<any>(`${this.url}/api/transaccionalFuncionary/listData`, this.httpOptions);
  }

  findAlltutor() {
    return this.http.get<any>(`${this.url}/api/funcionaryData/listData/active`, this.httpOptions);
  }

  findbyIdTutor(idTutor: any){
    return this.http.get<any>(`${this.url}/api/transaccionalFuncionary/listIdTutor/${idTutor}`, this.httpOptions);
  }

  UpdateAdolescent(teen: any){
    return this.http.post(`${this.url}/api/teenData/bulk`, teen)
  }  
}
