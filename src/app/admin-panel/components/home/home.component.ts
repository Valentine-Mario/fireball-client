import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
import {UsersService} from '../../services/users.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router,
     private route:ActivatedRoute, private userService:UsersService, private fb:FormBuilder) { }
users:any
p:number
searchForm:FormGroup
  ngOnInit() {
    this.users=this.route.snapshot.data['users']
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }

  paginate(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/user'])
    }else{
      this.router.navigate(['/adminpanel/action/user/'+a])
    }
  }

  suspendUser(user){
    this.userService.suspendUser(user.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast('', `${user.name} suspended successfully`);
        var index= this.users.message.findIndex(i => i.id === user['id'])
        this.users.message[index].suspended=true;
      }else{
        this.reuseable.errorToast('', `error suspending ${user.name}`)
      }
    })
  }

  unsuspendUser(user){
    this.userService.unsuspendUser(user.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast('', `${user.name} unsuspended successfully`);
        var index= this.users.message.findIndex(i => i.id === user['id'])
        this.users.message[index].suspended=false;
      }else{
        this.reuseable.errorToast('', `error unsuspending ${user.name}`)
      }
    })
  }

  makeAdmin(user){
    this.userService.makeAdmin(user.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast('', `${user.name} successfully made an admin`)
        var index= this.users.message.findIndex(i => i.id === user['id'])
        this.users.message[index].isAdmin=true
      }else{
        this.reuseable.errorToast('', `error making ${user.name} an admin`)
      }
    })
  }

  removeAdmin(user){
    this.userService.removeAdmin(user.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast('', `${user.name} successfully removed as an admin`)
        var index= this.users.message.findIndex(i => i.id === user['id'])
        this.users.message[index].isAdmin=false
      }else{
        this.reuseable.errorToast('', `error removing ${user.name} as an admin`)
      }
    })
  }

  search(){
    var value=this.searchForm.value;
    this.router.navigate(['/adminpanel/action/user-search/'+value.search])

  }

}
