import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {UserService} from '../services/user.service'
import {OthersService} from '../services/others.service'


@Injectable()
export class GetLengthOfUsersVideosPodcast implements Resolve<any> {
  constructor(private data:UserService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.getNumberOfUserVideosPodcast().pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')

          return empty();
      }))
    
  }
}

@Injectable()
export class GetUserProfile implements Resolve<any> {
  constructor(private data:UserService, private reuse:OthersService) {}
    
  resolve(){
    if(localStorage.getItem('token')==undefined){
      return true
    }else{
      return this.data.getProfile().pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}
}

@Injectable()
export class GetUserById implements Resolve<any> {
  constructor(private data: UserService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getUserById(route.paramMap.get('id')).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}