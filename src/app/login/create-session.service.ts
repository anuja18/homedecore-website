import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateSessionService {

  constructor(private httpClient:HttpClient) { }

  private baseurl='http://localhost:3000';

  createSession(userInfo:UserInfo):Observable<UserInfo>{
    return this.httpClient.post<UserInfo>(this.baseurl+'/userSessions',userInfo)
  }

  getSessionBySessionId(sessionId:string):Observable<UserInfo>{
    return this.httpClient.get<UserInfo>(this.baseurl+'/userSessions?sessionId='+sessionId);
  }
}

export class UserInfo{
  id:string;
  email:string;
  userId:string;
  sessionId:string;
  logged:true;
}
