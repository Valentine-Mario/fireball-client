import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {ChannelService} from '../services/channel.service'
import {OthersService} from '../services/others.service'

@Injectable()
export class GetNewChannels implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getNewChannels(1, 6).pipe(catchError((err)=>{
          this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetNewChannelsPage1 implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getNewChannels(1, 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetNewChannelsPageOther implements Resolve<any> {
  constructor(private data:ChannelService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    
   return this.data.getNewChannels(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
    this.reuse.errorToast('Error', 'Error connection to the server')
      return empty();
  }))
  }
}

@Injectable()
export class GetMyPodcast implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getMyPodcastChannel().pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetMyVideos implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getMyVideoChannel().pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetVideoChannelPage1 implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getVideoChannel(1, 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetVideoChannelPageOther implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getVideoChannel(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetPodcastChannelPage1 implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getPodcastChannel(1, 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetPodcastChannelPageOther implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getPodcastChannel(route.paramMap.get('id'), 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')

          return empty();
      }))
    
  }
}

@Injectable()
export class SearchChannel implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.searchChannel(route.paramMap.get('id'), 1, 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class SearchChannelPageOther implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.searchChannel(route.paramMap.get('id'), route.paramMap.get('id2'), 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetMyChannel implements Resolve<any> {
  constructor(private data: ChannelService, private reuse:OthersService) {}
    
  resolve(){
    return this.data.getMyChannel(1, 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetChannelOfUser implements Resolve<any> {
  constructor(private data: ChannelService, private reuse: OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getChannelOfUser(route.paramMap.get('id'), 1, 6).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}

@Injectable()
export class GetChannelBYToken implements Resolve<any> {
  constructor(private data: ChannelService, private reuse: OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    return this.data.getChannelByToken(route.paramMap.get('id')).pipe(catchError((err)=>{
      this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
    
  }
}


