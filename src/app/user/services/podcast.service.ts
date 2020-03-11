import { Injectable } from '@angular/core';
import {AppEndpoint} from '../../endpoint'
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

  getNewPodcasts(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcast/getall?page=${page}&per_page=${limit}`)
  }

  getPodcastFeed(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcast/feed?page=${page}&per_page=${limit}`,  {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  searchPodcast(param, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcast/search/${param}?page=${page}&per_page=${limit}`)
  }

  getPodcastByToken(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcast/listen/${id}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  mostListenedPodcast(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcast/mostlistens?page=${page}&per_page=${limit}`)
  }

  bookmarkPodcast(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/bookmark/podcast/${id}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  reportPodcast(data, id){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/report/podcast/${id}`, data, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  checkPodcastBookMark(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/bookmark/checkpodcast/${id}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  editPodcast(data, id){
    let authToken= localStorage.getItem('token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/podcast/edit/${id}`, data, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  deletePodcast(id){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/podcast/delete/${id}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
  viewBookmark(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/bookmark/podcastget?page=${page}&per_page=${limit}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }

  podcastHistory(page, limit){
    let authToken= localStorage.getItem('token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/user/podcast/history?page=${page}&per_page=${limit}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }
}
