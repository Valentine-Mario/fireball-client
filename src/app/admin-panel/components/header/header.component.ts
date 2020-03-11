import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router, private route:ActivatedRoute) { }
admin:any
  ngOnInit() {
    this.admin=this.route.snapshot.data['admin']
    if(this.admin.code!="00"){
      this.router.navigate(['/adminpanel/login'])
      this.reuseable.infoToast('Try to login again', "Token expired")
      localStorage.removeItem('admin-token')
    }
  }

  logout(){
    this.reuseable.infoToast('Logout successful', "come back soon")
    this.router.navigate(['/adminpanel/login'])
    localStorage.removeItem('admin-token')
  }

}
