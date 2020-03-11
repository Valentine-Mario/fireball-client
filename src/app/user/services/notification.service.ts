import { Injectable } from '@angular/core';
import {AppEndpoint} from '../../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  getPodcastNotification(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/user/notifpodcast?page=${page}&per_page=${limit}`, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
     })
  }

  getVideoNotification(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/user/notifvideo?page=${page}&per_page=${limit}`, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
     })
  }

  getNotifLength(){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/user/notilength`, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
     })
  }
}
