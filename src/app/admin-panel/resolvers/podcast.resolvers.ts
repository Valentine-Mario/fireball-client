import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {OthersService} from '../../user/services/others.service'
import {PodcastService} from '../services/podcast.service'

@Injectable()
    export class PodcastByToken implements Resolve<any> {
      constructor(private data: PodcastService, private reuse:OthersService) {}
        
      resolve(route: ActivatedRouteSnapshot){
        return this.data.getPodcastByToken(route.paramMap.get('id')).pipe(catchError((err)=>{
              return empty();
          }))
        
      }
    }