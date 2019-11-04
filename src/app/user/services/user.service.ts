import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getNumberOfUserVideosPodcast(){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/userpodcastvideolength')
  }

  loginUser(data){
    return this.http.post(AppEndpoint.API_ENDPOINT+'/login/user', data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    })
  }

  registerUser(data){
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/create', data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    })
  }
  forgotPassword(data){
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/forgotpassword', data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    })
  }
}
