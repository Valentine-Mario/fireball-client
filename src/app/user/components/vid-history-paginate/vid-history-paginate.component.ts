import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {VideoService}  from '../../services/video.service'
import {OthersService} from '../../services/others.service'

@Component({
  selector: 'app-vid-history-paginate',
  templateUrl: './vid-history-paginate.component.html',
  styleUrls: ['./vid-history-paginate.component.css']
})
export class VidHistoryPaginateComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
    private videoService:VideoService, private reuse:OthersService) {
      this.router.params.subscribe(params => this.parameter = params.id)
     }

    videos:any;
    p:number
    parameter:string
    user:any
  ngOnInit() {
    this.videos=this.router.snapshot.data['video']
    this.p=parseInt(this.parameter)

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
      this.videoService.videoHistory(e, 15).subscribe(val=>{
        this.videos.message=val['message']
      })
      this.p=parseInt(e)
  }
}

}
