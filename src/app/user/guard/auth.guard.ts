import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import {OthersService} from '../services/others.service'


@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private data:OthersService, private router:Router){}
canActivate():boolean{
if(this.data.loggedIn()){
return true
}else{
  this.data.infoToast('Login', "Please login to perform this action")
this.router.navigate(['/user/login'])
return false
}
}
}