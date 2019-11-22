import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../services/others.service'
import {VideoService} from '../services/video.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-video-search-paginate',
  templateUrl: './video-search-paginate.component.html',
  styleUrls: ['./video-search-paginate.component.css']
})
export class VideoSearchPaginateComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private vidService:VideoService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) { 
      this.router.params.subscribe(params => this.parameter = params.id)
      this.router.params.subscribe(params => this.parameter2 = params.id2)
    }
    parameter:string
    parameter2:string
    video:any
    p:number
    searchForm:FormGroup

  ngOnInit() {
    this.p=parseInt(this.parameter2)
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
  }
  paginateVideo(a){
    if(a==1){
      this.route.navigate(['/user/video-search/'+this.parameter])
    }
    else{
    this.route.navigate(['/user/video-search/'+this.parameter+'/'+a])
    this.vidService.searchVideo(this.parameter, a, 6).subscribe(val=>{
      this.video=val
    })
    this.p=parseInt(a)
    } 
  }
}
