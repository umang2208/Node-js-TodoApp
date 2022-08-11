import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }
 getData(){
  return this.http.get('http://127.0.0.1:5000/getData');
 }
 Register(user: any){
  // alert("in service");
 
  return this.http.post('http://127.0.0.1:5000/register', {user});
 } 
 login(user:any){
  // console.log(user,"inside service");
  return this.http.post('http://127.0.0.1:5000/login', {user});
  
 }
 logOut(){
  return this.http.get('http://127.0.0.1:5000/logout');
 }
}
