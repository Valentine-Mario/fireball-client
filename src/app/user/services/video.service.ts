import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) { }
  addVideo(data, id){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/video/add/'+id, data,  {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getNewVideos(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/video/getall?page=${page}&per_page=${limit}`)
  }

  getVideoFeed(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/video/feed?page=${page}&per_page=${limit}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  searchVideo(param, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/video/search/${param}?page=${page}&per_page=${limit}`)
  }

  getVideoByToken(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/video/getvid/${id}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  mostViewedVideos(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/video/mostviews?page=${page}&per_page=${limit}`)
  }
}
