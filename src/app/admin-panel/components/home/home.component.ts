import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router, private route:ActivatedRoute) { }
users:any
p:number
  ngOnInit() {
    this.users=this.route.snapshot.data['users']

  }

  paginate(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/user'])
    }else{
      this.router.navigate(['/adminpanel/action/user/'+a])
    }
  }

}
