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
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading:boolean=false
  constructor(private router: Router, private spinner:NgxSpinnerService) {
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
   
  }

}
