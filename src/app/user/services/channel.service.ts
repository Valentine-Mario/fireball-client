import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http:HttpClient) { }

  getNewChannels(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/getall?page=${page}&per_page=${limit}`)
  }

  addChannel(data){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/channel/add', data,  {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
  
}
