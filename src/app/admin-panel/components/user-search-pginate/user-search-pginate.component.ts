import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
import {UsersService} from '../../services/users.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-search-pginate',
  templateUrl: './user-search-pginate.component.html',
  styleUrls: ['./user-search-pginate.component.css']
})
export class UserSearchPginateComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router,
    private route:ActivatedRoute, private userService:UsersService, private fb:FormBuilder) {
      this.route.params.subscribe(params => this.parameter = params.id);
      this.route.params.subscribe(params => this.parameter2 = params.id2)

     }
    users:any;
    p:number;
    searchForm:FormGroup;
    parameter2:string;
     parameter:string
  ngOnInit() {
    this.users=this.route.snapshot.data['users']
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
    this.p=parseInt(this.parameter2)

  }

  paginate(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/user-search'])
    }else{
      this.router.navigate(['/adminpanel/action/user-search/'+this.parameter+'/'+a])
      this.userService.searchUser(this.parameter, a, 30).subscribe(val=>{
        if(val['code']=="00"){
          this.users=val
        }else{
          this.reuseable.errorToast('', 'error fetching user')
        }
      })
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
    var value=this.searchForm.value.search;
    this.router.navigate(['/adminpanel/action/user-search/'+value])

  }

}
