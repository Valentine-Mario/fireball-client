import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {UserService} from '../services/user.service'


@Injectable()
export class GetLengthOfUsersVideosPodcast implements Resolve<any> {
  constructor(private data:UserService, private toast:ToastrService) {}
    
  resolve(){
    
      return this.data.getNumberOfUserVideosPodcast().pipe(catchError((err)=>{
        setTimeout(() => this.toast.error('Error connecting to server, check internet connection'));
          return empty();
      }))
    
  }
}