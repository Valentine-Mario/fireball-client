import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-user-paginate',
  templateUrl: './user-paginate.component.html',
  styleUrls: ['./user-paginate.component.css']
})
export class UserPaginateComponent implements OnInit {

  constructor(private userService:UsersService, private router:Router, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.parameter = params.id)
   }
users:any;
p:number
parameter:string
  ngOnInit() {
    this.users=this.route.snapshot.data['users']
    this.p=parseInt(this.parameter)

  }

  paginate(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/user'])
    }
    else{
    this.router.navigate(['/adminpanel/action/user/'+a])
    this.userService.getUserList(a, 30).subscribe(val=>{
      this.users.message=val['message']
    })
    this.p=parseInt(a)
    } 
  }
}
