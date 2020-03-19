import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {VideoService} from '../../services/video.service'

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  p:number
  video:any
  searchForm:FormGroup
  parameter:string
  constructor(private router:Router, private fb:FormBuilder, private route:ActivatedRoute,
    private vidService:VideoService) { 
      this.route.params.subscribe(params => this.parameter = params.id)

    }

  ngOnInit() {
    this.video=this.route.snapshot.data['videos'] 
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }

  searchVideo(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/video-list/search/'+formValue.search])
    this.vidService.searchVideo(formValue.search, 1, 6).subscribe(val=>{
      this.video=val
    })
  }
  paginateVideo(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/video-list/search/'+this.parameter])
    }else{
      this.router.navigate(['/adminpanel/action/video-list/search/'+this.parameter+'/'+a])
    }
  }

}
