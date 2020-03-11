import { Injectable } from '@angular/core';
import {AppEndpoint} from '../../endpoint'
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

  getProfile(){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/get',  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getUserById(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/get/'+id, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    })
  }

  editProfile(data){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/edit', data, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  editPassword(data){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/editpasssword', data, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  uploadPics(data){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/addpics', data,  {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
  
  deletePics(){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/removepics',  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  deleteAccount(){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/delete',  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

}
