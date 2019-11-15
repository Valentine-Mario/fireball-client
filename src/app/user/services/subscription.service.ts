import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http:HttpClient) { }

  getSubscription(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/sub/get?page=${page}&per_page=${limit}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  Unsubscribe(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/sub/remove/${id}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addSubscription(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/sub/add/${id}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  checkIfUserIsSubscribed(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/checkusersub/${id}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  viewSubscribersInYourChannel(id, page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/getyoursub/${id}?page=${page}&per_page=${limit}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
