import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {OthersService} from '../services/others.service'
import {CommentService} from '../services/comment.service'

@Injectable()
export class GetVideoComment implements Resolve<any> {
  constructor(private data:CommentService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    
   return this.data.getVideoComments(route.paramMap.get('id2'), 1, 5).pipe(catchError((err)=>{
    this.reuse.errorToast('Error', 'Error connection to the server')
      return empty();
  }))
  }
}

@Injectable()
export class GetPodcastComment implements Resolve<any> {
  constructor(private data:CommentService, private reuse:OthersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    
   return this.data.getPodcastComment(route.paramMap.get('id2'), 1, 10).pipe(catchError((err)=>{
    this.reuse.errorToast('Error', 'Error connection to the server')
      return empty();
  }))
  }
}

