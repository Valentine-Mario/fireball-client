import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  p:number
  video:any
  searchForm:FormGroup
  constructor(private reuseable:OthersService, private router:Router, private fb:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.video=this.route.snapshot.data['videos'] 
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }

  paginateVideo(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/video-list'])
    }else{
      this.router.navigate(['/adminpanel/action/video-list/'+a])
    }
  }
  searchVideo(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/video-list/search/'+formValue.search])
  }

}
