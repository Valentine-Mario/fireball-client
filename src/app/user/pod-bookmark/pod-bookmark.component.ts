import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {PodcastService}  from '../services/podcast.service'
import {OthersService} from '../services/others.service'

@Component({
  selector: 'app-pod-bookmark',
  templateUrl: './pod-bookmark.component.html',
  styleUrls: ['./pod-bookmark.component.css']
})
export class PodBookmarkComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
     private podcastService:PodcastService, private reuse:OthersService) { }
bookmarks:any;
p:number=1

  ngOnInit() {
    this.bookmarks=this.router.snapshot.data['podcast']

  }
  paginate(e){
    if(e==1){
      this.route.navigate(['/user/podcastbookmark'])
    }else{
      this.route.navigate(['/user/podcastbookmark/'+e])
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
