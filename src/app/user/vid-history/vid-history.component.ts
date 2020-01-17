import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {VideoService}  from '../services/video.service'
import {OthersService} from '../services/others.service'


@Component({
  selector: 'app-vid-history',
  templateUrl: './vid-history.component.html',
  styleUrls: ['./vid-history.component.css']
})
export class VidHistoryComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
    private videoService:VideoService, private reuse:OthersService) {
     }
    videos:any;
    p:number=1
    user:any

  ngOnInit() {
    this.videos=this.router.snapshot.data['video']
    this.user=this.router.snapshot.data['user']

    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Try to login again', "Token expired")
    }
  }
  paginate(e){
      if(e==1){
        this.route.navigate(['/user/videohistory'])
      }else{
        this.route.navigate(['/user/videohistory/'+e])
    }
  }

}
