import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {PodcastService}  from '../services/podcast.service'
import {OthersService} from '../services/others.service'

@Component({
  selector: 'app-pod-bookmark-paginate',
  templateUrl: './pod-bookmark-paginate.component.html',
  styleUrls: ['./pod-bookmark-paginate.component.css']
})
export class PodBookmarkPaginateComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
    private podcastService:PodcastService, private reuse:OthersService) { 
      this.router.params.subscribe(params => this.parameter = params.id)
    }
    parameter:string
    bookmarks:any;
    p:number
    user:any
  ngOnInit() {
    this.bookmarks=this.router.snapshot.data['podcast']
    this.p=parseInt(this.parameter)
    this.user=this.router.snapshot.data['user']

    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Try to login again', "Token expired")
    }
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/podcastbookmark'])
    }else{
      this.route.navigate(['/user/podcastbookmark/'+a])
      this.podcastService.viewBookmark(a, 15).subscribe(val=>{
        this.bookmarks.message=val['message']
      })
      this.p=parseInt(a)
    }
  }

  remove(a){
    this.podcastService.bookmarkPodcast(a.podcast.id).subscribe(val=>{
      if(val['code']=="00"){
        this.bookmarks.message.splice(this.bookmarks.message.indexOf(a), 1)
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }
}
