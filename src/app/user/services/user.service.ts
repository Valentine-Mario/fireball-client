import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getNumberOfUserVideosPodcast(){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/userpodcastvideolength')
  }

}
