import { Injectable } from '@angular/core';
import {AppEndpoint} from '../../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http:HttpClient) { }
  getPodcastByToken(id){
    let authToken= localStorage.getItem('admin-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/admin/getpocast/${id}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
