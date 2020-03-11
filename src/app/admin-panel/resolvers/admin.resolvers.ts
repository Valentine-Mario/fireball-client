import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {AdminService} from '../services/admin.service'
import {OthersService} from '../../user/services/others.service'


@Injectable()
export class GetAdminProfile implements Resolve<any> {
  constructor(private data:AdminService, private reuse:OthersService) {}
    
  resolve(){
      return this.data.getProfile().pipe(catchError((err)=>{
        this.reuse.errorToast('Error', 'Error connection to the server')
          return empty();
      }))
}
}