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
  
}
