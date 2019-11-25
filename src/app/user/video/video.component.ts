import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../services/others.service'
import {VideoService} from '../services/video.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private vidservice:VideoService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) { }
video:any
most_watched:any
p:number
p2:number;
searchForm:FormGroup
  ngOnInit() {
    this.title.setTitle('Videos');
    this.meta.updateTag({ name: 'fireball videos', content: 'fireball video page' });
    if(localStorage.getItem('token')==undefined){
      this.video=this.router.snapshot.data['new_video']
    }else{
      this.video=this.router.snapshot.data['feed_video']
      if(this.video.code=="02"){
        this.reuse.logoutAndRedirect()
        this.reuse.infoToast('Try to login again', "Token expired")

      }
      if(this.video.message.length <1){
        this.video=this.router.snapshot.data['new_video']
        
      }
    }

    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })

    this.most_watched=this.router.snapshot.data['most_viewed']

  }

  searchVideo(){
    var formValue=this.searchForm.value
    this.route.navigate(['/user/video-search/'+formValue.search])
  }

  paginateMostViewed(a){
    this.vidservice.mostViewedVideos(a, 6).subscribe(val=>{
     this.most_watched=val
    })
  }

  paginateVideo(a){
    if(a==1){
      this.route.navigate(['/user/video'])
    }else{
      this.route.navigate(['/user/video/'+a])
    }
  }

}
