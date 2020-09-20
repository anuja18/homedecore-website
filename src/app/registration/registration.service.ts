import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  getUsers():Observable<User[]>{
   return this.httpClient.get<User[]>(this.baseUrl+"/users");
  }

  createUser(user:User):Observable<any>{
     return this.httpClient.post<User>(this.baseUrl+"/users",user);
  }

  getUser(email:string):Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl+"/users?email="+email);
  }
}

export class User{
  id:number;
  fullName:string;
  mobile:number;
  email:string;
  password:string
}