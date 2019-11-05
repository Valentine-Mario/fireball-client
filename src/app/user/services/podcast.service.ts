import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http:HttpClient) { }
  addPodcast(data, id){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/podcast/add/'+id, data,  {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
