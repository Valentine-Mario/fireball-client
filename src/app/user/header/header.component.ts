import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  ActivatedRoute
} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { OthersService } from '../services/others.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading:boolean=false
  logout_user:boolean;
  login_user:boolean
  load:boolean=false
  notif_length:number

  constructor(private router: Router, private spinner:NgxSpinnerService,
     private reuseable:OthersService, private route:ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
         
         // this.spinner.show('loader')
          this.load=true
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          
          // setTimeout(() => {
          //   this.spinner.hide('loader');
          // }, 20);
        this.load=false
          break;
        }
        default: {
          break;
        }
      }
    });
   }

  ngOnInit() {
    this.notif_length=this.route.snapshot.data['length'].message
    if(localStorage.getItem('token')){
      if(this.route.snapshot.data['length'].code!='00'){
        this.reuseable.logoutAndRedirect()
        this.reuseable.infoToast('Token error', this.route.snapshot.data['length'].message)
      }
    }
    
    if(localStorage.getItem('token')){
      this.logout_user=false;
      this.login_user=true;
    }else{
      this.login_user=false;
      this.logout_user=true
    }
  }
  logout(){
    this.reuseable.logoutAndRedirect()
    this.reuseable.infoToast('Logout successful', "come back soon")
  }

}
