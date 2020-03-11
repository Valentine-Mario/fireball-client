import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../../services/others.service'
import {SubscriptionService} from '../../services/subscription.service'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
     private reuse:OthersService, private subdata:SubscriptionService) { }
sub:any
total:number
p:number=1
  ngOnInit() {
    this.sub=this.router.snapshot.data['sub'].message
    this.total=this.router.snapshot.data['sub'].total
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
    }
  }
  unsubscribe(a){
    this.subdata.Unsubscribe(a.id).subscribe(val=>{
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
