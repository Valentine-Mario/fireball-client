import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
import {VideoService} from '../../services/video.service'

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router,
    private route:ActivatedRoute, private vidService:VideoService) { 
      this.route.params.subscribe(params => this.parameter = params.id)

    }
p:number
video:any
report:any
parameter:string
  ngOnInit() {
   this.video=this.route.snapshot.data['video'] 
    this.report=this.route.snapshot.data['report']
  }

  paginateComment(a){
    this.vidService.getVideoReports(this.parameter, a, 10).subscribe(val=>{
      this.report.message=val['message']
    })
    this.p=parseInt(a)
  }

  suspendVideo(){
    this.vidService.suspendVideo(this.video.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast("", "video suspended successfully")
        this.video.message.suspended=true
      }else{
        this.reuseable.errorToast("", 'error suspending video')
      }
    })
  }

  unsuspendVideo(){
    this.vidService.unsuspendVideo(this.video.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast("", "video unsuspended successfully")
        this.video.message.suspended=false
      }else{
        this.reuseable.errorToast("", 'error unsuspending video')
      }
    })
  }
}
