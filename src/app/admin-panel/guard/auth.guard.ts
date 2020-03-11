import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import {OthersService} from '../../user/services/others.service'


@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private data:OthersService, private router:Router){}
canActivate():boolean{
if(localStorage.getItem('admin-token')){
return true
}else{
  this.data.infoToast('Login', "Please login to perform this action")
  this.router.navigate(['/adminpanel/login'])
  return false
}
}
}