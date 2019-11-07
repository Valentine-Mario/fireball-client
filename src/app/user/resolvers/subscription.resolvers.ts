import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {SubscriptionService} from '../services/subscription.service'

@Injectable()
export class getSubscriptionPage1 implements Resolve<any> {
  constructor(private data:SubscriptionService) {}
    
  resolve(){
      return this.data.getSubscription(1, 10).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}

@Injectable()
export class getSubscriptionPageOther implements Resolve<any> {
  constructor(private data: SubscriptionService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getSubscription(route.paramMap.get('id'), 10).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}

