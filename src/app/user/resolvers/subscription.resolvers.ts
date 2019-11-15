import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {SubscriptionService} from '../services/subscription.service'
import {OthersService} from '../services/others.service'

@Injectable()
export class getSubscriptionPage1 implements Resolve<any> {
  constructor(private data:SubscriptionService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.getSubscription(1, 10).pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class getSubscriptionPageOther implements Resolve<any> {
  constructor(private data: SubscriptionService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getSubscription(route.paramMap.get('id'), 10).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}


@Injectable()
export class CheckIfUserIsSubscribed implements Resolve<any> {
  constructor(private data: SubscriptionService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    if(localStorage.getItem('token')==undefined){
      return true
    }else{
    return this.data.checkIfUserIsSubscribed(route.paramMap.get('id')).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    }
    
  }
}
