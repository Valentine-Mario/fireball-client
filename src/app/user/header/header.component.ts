import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
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
  constructor(private router: Router, private spinner:NgxSpinnerService, private reuseable:OthersService) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
         
          this.spinner.show('loader')
         
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          
          setTimeout(() => {
            this.spinner.hide('loader');
          }, 20);
        
          break;
        }
        default: {
          break;
        }
      }
    });
   }

  ngOnInit() {
   
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
