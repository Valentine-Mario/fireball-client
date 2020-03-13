import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {UsersService} from '../services/users.service'
import {OthersService} from '../../user/services/others.service'


@Injectable()
export class GetUserList implements Resolve<any> {
  constructor(private data:UsersService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.getUserList(1, 30).pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
}
}

@Injectable()
export class GetUserListPaginate implements Resolve<any> {
  constructor(private data: UsersService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getUserList(route.paramMap.get('id'), 30).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class SearchUser implements Resolve<any> {
  constructor(private data: UsersService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.searchUser(route.paramMap.get('id'), 1, 30).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class SearchUserPaginate implements Resolve<any> {
  constructor(private data: UsersService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.searchUser(route.paramMap.get('id'), route.paramMap.get('id2'), 30).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}
