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