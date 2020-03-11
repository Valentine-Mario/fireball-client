import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router'
import {OthersService} from '../../services/others.service'
import {NotificationService} from '../../services/notification.service'
@Component({
  selector: 'app-notification-paginate',
  templateUrl: './notification-paginate.component.html',
  styleUrls: ['./notification-paginate.component.css']
})
export class NotificationPaginateComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private notification:NotificationService,
    private meta: Meta, private router:ActivatedRoute, private route:Router) {
      this.router.params.subscribe(params => this.parameter = params.id)
     }
    user:any
    vid_notif:any
    pod_notif:any
    total_item:any
    total_item_length:number
    p:number
    parameter:string
  ngOnInit() {
    this.p=parseInt(this.parameter)
    this.title.setTitle('Notification');
    this.meta.updateTag({ name: 'fireball notification alert', content: 'fireball notification alert page' });
    this.user=this.router.snapshot.data['user']
    this.vid_notif=this.router.snapshot.data['video']
    this.pod_notif=this.router.snapshot.data['podcast']
    //concatenate the two arrays and sort by date
    this.total_item=this.vid_notif.message.concat(this.pod_notif.message).sort(function compare(a, b) {
      var dateA:any = new Date(a.created_at);
      var dateB:any = new Date(b.created_at);
      return dateA - dateB;
    }).reverse()
    this.total_item_length=this.vid_notif.total + this.pod_notif.total
    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Try to login again', "Token expired")
    }
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/notification'])
    }else{
      this.route.navigate(['/user/notification/'+a])
      this.notification.getVideoNotification(a, 15).subscribe(val1=>{
       // this.bookmarks.message=val['message']
       this.notification.getPodcastNotification(a, 15).subscribe(val2=>{
         this.total_item=val1['message'].concat(val2['message']).sort(function compare(a, b) {
          var dateA:any = new Date(a.created_at);
          var dateB:any = new Date(b.created_at);
          return dateA - dateB;
        }).reverse()
       })
      })
      this.p=parseInt(a)
    }
  }

}
