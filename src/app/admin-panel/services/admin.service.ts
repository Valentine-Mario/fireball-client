import { Injectable } from '@angular/core';
import {AppEndpoint} from '../../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adminLogin(data){
    return this.http.post(AppEndpoint.API_ENDPOINT+'/login/admin', data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    })
  }
  getProfile(){
    let authToken= localStorage.getItem('admin-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/get',  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
