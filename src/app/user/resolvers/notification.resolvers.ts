import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {NotificationService} from '../services/notification.service'

@Injectable()
export class GetNotifLength implements Resolve<any> {
  constructor(private data:NotificationService) {}
    
  resolve(){
    if(localStorage.getItem('token')==undefined){
        return true
      }else{
      return this.data.getNotifLength().pipe(catchError((err)=>{

          return empty();
      }))
      }
  }
}


@Injectable()
export class GetVideoNotif implements Resolve<any> {
  constructor(private data:NotificationService) {}
    
  resolve(){
   
      return this.data.getVideoNotification(1, 15).pipe(catchError((err)=>{

          return empty();
      }))
      
  }
}


@Injectable()
export class GetPodcastNotif implements Resolve<any> {
  constructor(private data:NotificationService) {}
    
  resolve(){
      return this.data.getPodcastNotification(1, 15).pipe(catchError((err)=>{

          return empty();
      }))
    
  }
}
@Injectable()
export class GetVideoNotifPaginate implements Resolve<any> {
  constructor(private data: NotificationService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getVideoNotification(route.paramMap.get('id'), 15).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}

@Injectable()
export class GetPodcastNotifPaginate implements Resolve<any> {
  constructor(private data: NotificationService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getPodcastNotification(route.paramMap.get('id'), 15).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}