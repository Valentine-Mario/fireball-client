import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {VideoService}  from '../services/video.service'
import {OthersService} from '../services/others.service'


@Component({
  selector: 'app-vid-bookmark-paginate',
  templateUrl: './vid-bookmark-paginate.component.html',
  styleUrls: ['./vid-bookmark-paginate.component.css']
})
export class VidBookmarkPaginateComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
    private videoService:VideoService, private reuse:OthersService) {
      this.router.params.subscribe(params => this.parameter = params.id)
     }
    bookmarks:any;
    p:number=1
    parameter:string
     user:any
  ngOnInit() {
    this.bookmarks=this.router.snapshot.data['video']
    this.p=parseInt(this.parameter)
    this.user=this.router.snapshot.data['user']

    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Try to login again', "Token expired")
    }
  }
  paginate(e){
     
    if(e==1){
      this.route.navigate(['/user/videobookmark'])
    }else{
      this.route.navigate(['/user/videobookmark/'+e])
      this.videoService.viewBookmark(e, 15).subscribe(val=>{
        this.bookmarks.message=val['message']
      })
      this.p=parseInt(e)
    }
  }
  remove(a){
    this.videoService.bookmarkVideo(a.video.id).subscribe(val=>{
      if(val['code']=="00"){
        this.bookmarks.message.splice(this.bookmarks.message.indexOf(a), 1)
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }



}
