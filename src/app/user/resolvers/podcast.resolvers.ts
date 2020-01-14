import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {PodcastService} from '../services/podcast.service';
import {OthersService} from '../services/others.service'

@Injectable()
export class GetNewPodcast implements Resolve<any> {
    constructor(private data:PodcastService, private reuse:OthersService) {}
      
    resolve(){
        return this.data.getNewPodcasts(1, 6).pipe(catchError((err)=>{
  
            return empty();
        }))
      
    }
  }
  
  @Injectable()
  export class GetNewPodcastPaginate implements Resolve<any> {
    constructor(private data: PodcastService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.getNewPodcasts(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }
  
  @Injectable()
  export class GetPodcastFeed implements Resolve<any> {
    constructor(private data:PodcastService, private reuse:OthersService) {}
      
    resolve(){
      if(localStorage.getItem('token')==undefined){
          return true
        }else{
        return this.data.getPodcastFeed(1, 6).pipe(catchError((err)=>{
            return empty();
        }))
        }
    }
  }
  
  @Injectable()
  export class GetPodcastFeedPaginate implements Resolve<any> {
    constructor(private data: PodcastService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      if(localStorage.getItem('token')==undefined){
          return true
        }else{
      return this.data.getPodcastFeed(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
            return empty();
        }))
        }
    }
  }
  
  @Injectable()
  export class SearchPodcast implements Resolve<any> {
    constructor(private data: PodcastService, private reuse:OthersService) {}
      
    resolve(route: ActivatedRouteSnapshot){
      return this.data.searchPodcast(route.paramMap.get('id'), 1, 6).pipe(catchError((err)=>{
            return empty();
        }))
      
    }
  }
  
  @Injectable()
  export class SearchPodcastPaginate implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.searchPodcast(route.paramMap.get('id'), route.paramMap.get('id2'), 6).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }
  
    @Injectable()
    export class PodcastByToken implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.getPodcastByToken(route.paramMap.get('id2')).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }
  

    @Injectable()
    export class MostListens implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.mostListenedPodcast(1, 6).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }
  

    @Injectable()
    export class CheckPodcastBookmark implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.checkPodcastBookMark(route.paramMap.get('id2')).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }
  
    @Injectable()
    export class PodcastByToken2 implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.getPodcastByToken(route.paramMap.get('id2')).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }
  

    @Injectable()
    export class CheckPodcastBookmark2 implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.checkPodcastBookMark(route.paramMap.get('id2')).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }

    @Injectable()
    export class GetPodcastBookMark implements Resolve<any> {
      constructor(private data:PodcastService, private reuse:OthersService) {}
        
      resolve(){
          return this.data.viewBookmark(1, 15).pipe(catchError((err)=>{
            this.reuse.errorToast('Error', 'Error connection to the server')
    
              return empty();
          }))
        
      }
    }
    
    @Injectable()
    export class GetPodcastBookMarkPaginate implements Resolve<any> {
      constructor(private data:PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
          return this.data.viewBookmark(route.paramMap.get('id'), 15).pipe(catchError((err)=>{
            this.reuse.errorToast('Error', 'Error connection to the server')
    
              return empty();
          }))
        
      }
    }
    
    @Injectable()
    export class GetPodcastHistory implements Resolve<any> {
      constructor(private data:PodcastService, private reuse:OthersService) {}
        
      resolve(){
          return this.data.podcastHistory(1, 15).pipe(catchError((err)=>{
            this.reuse.errorToast('Error', 'Error connection to the server')
    
              return empty();
          }))
        
      }
    }
    
    @Injectable()
    export class GetPodcastHistoryPaginate implements Resolve<any> {
      constructor(private data:PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
          return this.data.podcastHistory(route.paramMap.get('id'), 15).pipe(catchError((err)=>{
            this.reuse.errorToast('Error', 'Error connection to the server')
    
              return empty();
          }))
        
      }
    }