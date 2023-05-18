import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  ViewTools=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  addTools=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

}
