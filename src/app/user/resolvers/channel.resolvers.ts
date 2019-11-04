import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {ChannelService} from '../services/channel.service'

@Injectable()
export class GetNewChannels implements Resolve<any> {
  constructor(private data: ChannelService) {}
    
  resolve(){
    return this.data.getNewChannels(1, 6).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}