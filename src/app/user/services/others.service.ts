import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class OthersService {

  constructor(private toast: ToastrService) { }

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
}
