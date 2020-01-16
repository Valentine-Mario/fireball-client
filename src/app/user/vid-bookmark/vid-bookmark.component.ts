import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {VideoService}  from '../services/video.service'
import {OthersService} from '../services/others.service'


@Component({
  selector: 'app-vid-bookmark',
  templateUrl: './vid-bookmark.component.html',
  styleUrls: ['./vid-bookmark.component.css']
})
export class VidBookmarkComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
    private videoService:VideoService, private reuse:OthersService) { }
    bookmarks:any;
    p:number=1
    
  ngOnInit() {
    this.bookmarks=this.router.snapshot.data['video']
    
  }
  paginate(e){
    if(e==1){
      this.route.navigate(['/user/videobookmark'])
    }else{
      this.route.navigate(['/user/videobookmark/'+e])
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
