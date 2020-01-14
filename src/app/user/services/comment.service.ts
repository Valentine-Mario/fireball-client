import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getVideoComments(id, page, limit){
   return  this.http.get(AppEndpoint.API_ENDPOINT+`/vidcomment/get/${id}?page=${page}&per_page=${limit}`)
  }

  getPodcastComment(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcomment/get/${id}?page=${page}&per_page=${limit}`)
  }

  addVideoComment(data, id){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/vidcomment/add/${id}`, data, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  addPodcastComment(data, id){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/podcomment/add/${id}`, data, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  deleteVideoComment(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/vidcomment/delete/${id}`, {
    headers: new HttpHeaders({'authorization': "bearer "+authToken}),
  })
}

  deletePodcastComment(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcomment/delete/${id}`, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
