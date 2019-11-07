import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SubscriptionService} from '../services/subscription.service'
import {OthersService} from '../services/others.service'


@Component({
  selector: 'app-subscription-paginate',
  templateUrl: './subscription-paginate.component.html',
  styleUrls: ['./subscription-paginate.component.css']
})
export class SubscriptionPaginateComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,private reuse:OthersService,
     private subservice:SubscriptionService) {
    this.router.params.subscribe(params => this.parameter = params.id)

   }
   parameter:string
   sub:any
  total:number
  p:number
  suspended:boolean;
  ngOnInit() {
    this.sub=this.router.snapshot.data['sub'].message
    this.total=this.router.snapshot.data['sub'].total
    this.p=parseInt(this.parameter)
    if(this.router.snapshot.data['sub'].code=="02"){
      this.reuse.logoutAndRedirect();
      this.reuse.infoToast("Token Expired", 'Your token has expired login again')
    }
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/subscription'])
    }else{
      this.route.navigate(['/user/subscription/'+a])
      this.subservice.getSubscription(a, 10).subscribe(val=>{
        this.sub=val['message']
      })
      this.p=parseInt(a)
    }
  }

  unsubscribe(a){
    this.subservice.Unsubscribe(a.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast("Unsubscribed successful", val['message'])
        var index=this.sub.indexOf(a);
        this.sub.splice(index, 1)
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

}
