import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../services/others.service'
import {VideoService} from '../services/video.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private vidService:VideoService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) { 
      this.router.params.subscribe(params => this.parameter = params.id)
      
    }
    parameter:string
    video:any
    p:number
    searchForm:FormGroup
  ngOnInit() {
    this.title.setTitle(this.parameter);
    this.meta.updateTag({ name: 'fireball videos', content: `Search result for ${this.parameter}` });
    this.video=this.router.snapshot.data['video']
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }
  searchVideo(){
    var formValue=this.searchForm.value
    this.route.navigate(['/user/video-search/'+formValue.search])
    this.vidService.searchVideo(formValue.search, 1, 6).subscribe(val=>{
      this.video=val
    })
  }
  paginateVideo(a){
    if(a==1){
      this.route.navigate(['/user/video-search/'+this.parameter])
    }else{
      this.route.navigate(['/user/video-search/'+this.parameter+'/'+a])
    }
  }
}
