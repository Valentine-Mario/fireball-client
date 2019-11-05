import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class OthersService {

  constructor(private toast: ToastrService, private route:Router) { }

  successToast(header, body){
    this.toast.success(body, header, {
      enableHtml: true,
      closeButton: true,
      timeOut: 5000
  })
  }

  infoToast(header, body){
    this.toast.info(body, header, {
      enableHtml: true,
      closeButton: true,
      timeOut: 5000
    })
  }

  errorToast(header, body){
    this.toast.error(body, header, {
      enableHtml: true,
      closeButton: true,
      timeOut: 5000
    })
  }

  logoutAndRedirect(){
    localStorage.removeItem('token')
    this.route.navigate(['/user/login'])
  }
  
  loggedIn(){
    return !!localStorage.getItem('token')
    }
}
