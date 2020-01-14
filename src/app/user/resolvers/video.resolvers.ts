import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {VideoService} from '../services/video.service'
import {OthersService} from '../services/others.service'

@Injectable()
export class GetNewVideo implements Resolve<any> {
  constructor(private data:VideoService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.getNewVideos(1, 6).pipe(catchError((err)=>{

          return empty();
      }))
    
  }
}

@Injectable()
export class GetNewVideoPaginate implements Resolve<any> {
  constructor(private data: VideoService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getNewVideos(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
          return empty();
      }))
    
  }
}

@Injectable()
export class GetVideoFeed implements Resolve<any> {
  constructor(private data:VideoService, private reuse:OthersService) {}
    
  resolve(){
    if(localStorage.getItem('token')==undefined){
        return true
      }else{
      return this.data.getVideoFeed(1, 6).pipe(catchError((err)=>{
          return empty();
      }))
      }
  }
}

@Injectable()
export class GetVideoFeedPaginate implements Resolve<any> {
  constructor(private data: VideoService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    if(localStorage.getItem('token')==undefined){
        return true
      }else{
    return this.data.getVideoFeed(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
          return empty();
      }))
      }
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

  @Injectable()
  export class VideoByToken implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.getVideoByToken(route.paramMap.get('id2')).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }


  @Injectable()
  export class MostViewed implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.mostViewedVideos(1, 6).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }


  @Injectable()
  export class CheckVideoBookmark implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.checkVideoBookMark(route.paramMap.get('id2')).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }


  @Injectable()
  export class VideoByToken2 implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.getVideoByToken(route.paramMap.get('id2')).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }


  @Injectable()
  export class CheckVideoBookmark2 implements Resolve<any> {
    constructor(private data: VideoService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.checkVideoBookMark(route.paramMap.get('id2')).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }

  @Injectable()
export class GetVideoBookMark implements Resolve<any> {
  constructor(private data:VideoService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.viewBookmark(1, 15).pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')

          return empty();
      }))
    
  }
}

@Injectable()
export class GetVideoBookMarkPginate implements Resolve<any> {
  constructor(private data:VideoService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
      return this.data.viewBookmark(route.paramMap.get('id'), 15).pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')

          return empty();
      }))
    
  }
}

@Injectable()
export class GetVideoHistory implements Resolve<any> {
  constructor(private data:VideoService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.videoHistory(1, 15).pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')

          return empty();
      }))
    
  }
}

@Injectable()
export class GetVideoHistoryPaginate implements Resolve<any> {
  constructor(private data:VideoService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
      return this.data.videoHistory(route.paramMap.get('id'), 15).pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')

          return empty();
      }))
    
  }
}