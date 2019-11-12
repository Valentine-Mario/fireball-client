import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {UserService} from '../services/user.service'


@Injectable()
export class GetLengthOfUsersVideosPodcast implements Resolve<any> {
  constructor(private data:UserService) {}
    
  resolve(){
      return this.data.getNumberOfUserVideosPodcast().pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}

@Injectable()
export class GetUserProfile implements Resolve<any> {
  constructor(private data:UserService) {}
    
  resolve(){
    if(localStorage.getItem('token')==undefined){
      return true
    }else{
      return this.data.getProfile().pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}
}

@Injectable()
export class GetUserById implements Resolve<any> {
  constructor(private data: UserService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getUserById(route.paramMap.get('id')).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}