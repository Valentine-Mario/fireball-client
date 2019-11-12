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

  getVideoChannel(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/getvideo?page=${page}&per_page=${limit}`)
  }
  getPodcastChannel(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/getpodcast?page=${page}&per_page=${limit}`)
  }

  getMyPodcastChannel(){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/channel/mypodcast', {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  searchChannel(search, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/search/${search}?page=${page}&per_page=${limit}`)
  }

  getMyVideoChannel(){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/channel/myvideo',  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addChannel(data){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/channel/add', data,  {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getMyChannel(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/get?page=${page}&per_page=${limit}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getChannelOfUser(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/channel/get/${id}?page=${page}&per_page=${limit}`)
  }
  
}
