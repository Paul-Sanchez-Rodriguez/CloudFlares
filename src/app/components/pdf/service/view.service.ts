import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) { }

  private url = environment.apiURL;

  generarPDFFuncionary(idfuncionary:number){
    return this.http.get(`${this.url}/api/report/funcionary/${idfuncionary}`,{responseType: 'arraybuffer'})
  }

  generarPDFAddress(idTeen:number){
    return this.http.get(`${this.url}/api/report/address/${idTeen}`,{responseType: 'arraybuffer'})
  }

  generarPDFAttendance(idactivity:number){
    return this.http.get(`${this.url}/api/report/attendance/${idactivity}`,{responseType: 'arraybuffer'})
  }
}
