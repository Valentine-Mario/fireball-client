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

  @Injectable()
  export class GetNewVideo implements Resolve<any>{
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.getallVideos(1, 6).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }

  @Injectable()
  export class GetNewVideoPaginate implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.getallVideos(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
            return empty();
        }))
    }
  }

  @Injectable()
  export class SearchVideo implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.searchVideo(route.paramMap.get('id'), 1, 6).pipe(catchError((err)=>{
            return empty();
        }))
    }
  }

  @Injectable()
  export class SearchVideoPaginate implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.searchVideo(route.paramMap.get('id'), route.paramMap.get('id2'), 6).pipe(catchError((err)=>{
            return empty();
        }))
    }
  }