import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {OthersService} from '../../user/services/others.service'
import {VideoService} from '../services/video.service'

@Injectable()
  export class VideoByToken implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.getVideoByToken(route.paramMap.get('id')).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }