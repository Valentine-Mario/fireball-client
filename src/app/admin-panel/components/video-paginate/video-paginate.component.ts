import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {VideoService} from '../../services/video.service'
@Component({
  selector: 'app-video-paginate',
  templateUrl: './video-paginate.component.html',
  styleUrls: ['./video-paginate.component.css']
})
export class VideoPaginateComponent implements OnInit {
  p:number
  video:any
  parameter:string
  searchForm:FormGroup
  constructor(private reuseable:OthersService, private router:Router, private fb:FormBuilder,
    private route:ActivatedRoute, private vidService:VideoService) { 
      this.route.params.subscribe(params => this.parameter = params.id)

    }

  ngOnInit() {
    this.video=this.route.snapshot.data['videos'] 
    this.p=parseInt(this.parameter)
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }
  
  paginateVideo(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/video-list'])
    }
    else{
    this.router.navigate(['/adminpanel/action/video-list/'+a])
     this.vidService.getallVideos(a, 6).subscribe(val=>{
       this.video=val
     })
    
    this.p=parseInt(a)
    } 
  }
  searchVideo(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/video-list/search/'+formValue.search])
  }
}
