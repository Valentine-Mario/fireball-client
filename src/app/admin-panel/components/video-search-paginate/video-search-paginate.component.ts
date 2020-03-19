import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/video.service'
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-video-search-paginate',
  templateUrl: './video-search-paginate.component.html',
  styleUrls: ['./video-search-paginate.component.css']
})
export class VideoSearchPaginateComponent implements OnInit {
  p:number
  video:any
  searchForm:FormGroup
  parameter:string
  parameter2:string
  constructor(private router:Router, private fb:FormBuilder, private route:ActivatedRoute,
    private vidService:VideoService) { 
      this.route.params.subscribe(params => this.parameter2 = params.id2)
      this.route.params.subscribe(params => this.parameter = params.id)


    }

  ngOnInit() {
    this.video=this.route.snapshot.data['videos'] 
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
    this.p=parseInt(this.parameter2)
  }

  searchVideo(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/video-list/search/'+formValue.search])
  }

  paginateVideo(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/video-list/search/'+this.parameter])
    }else{
      this.router.navigate(['/adminpanel/action/video-list/search/'+this.parameter+'/'+a])
    this.vidService.searchVideo(this.parameter, a, 6).subscribe(val=>{
      this.video=val
    })
    this.p=parseInt(a)
    }
  }

}
