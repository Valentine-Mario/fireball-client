import { Injectable } from '@angular/core';
import {AppEndpoint} from '../../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUserList(page, limit){
    let authToken= localStorage.getItem('admin-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/admin/getusers?page=${page}&per_page=${limit}`, {  
      headers: new HttpHeaders({'authorization': "bearer "+authToken, 'Content-Type': 'application/json'}),
    })
  }
}
