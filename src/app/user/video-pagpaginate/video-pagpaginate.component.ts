import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../services/others.service'
import {VideoService} from '../services/video.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-video-pagpaginate',
  templateUrl: './video-pagpaginate.component.html',
  styleUrls: ['./video-pagpaginate.component.css']
})
export class VideoPagpaginateComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private vidService:VideoService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) { 
      this.router.params.subscribe(params => this.parameter = params.id)
    }
    parameter:string
    video:any
    p:number
    searchForm:FormGroup
  ngOnInit() {
    this.p=parseInt(this.parameter)
    this.title.setTitle('Videos');
    this.meta.updateTag({ name: 'fireball videos', content: 'fireball video page' });
    if(localStorage.getItem('token')==undefined){
      this.video=this.router.snapshot.data['new_video']
    }else{
      this.video=this.router.snapshot.data['feed_video']
      if(this.video.code=="02"){
        this.reuse.logoutAndRedirect()
        this.reuse.infoToast('Error', this.video['message'])
      }
      if(this.video.message.length <1){
        this.video=this.router.snapshot.data['new_video']
        
      }
    }

    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }
  searchVideo(){
    var formValue=this.searchForm.value
    this.route.navigate(['/user/video-search/'+formValue.search])
  }
  paginateVideo(a){
    if(a==1){
      this.route.navigate(['/user/video'])
    }
    else{
    this.route.navigate(['/user/video'+a])
    if(localStorage.getItem('token')==undefined|| this.router.snapshot.data['feed_video'].message.length <1){
     this.vidService.getNewVideos(a, 6).subscribe(val=>{
       this.video=val
     })
    }else{
      this.video=this.router.snapshot.data['feed_video']
      this.vidService.getVideoFeed(a, 6).subscribe(val=>{
        this.video=val
        
      })
    }
    this.p=parseInt(a)
    } 
  }

}
