import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router,
    private route:ActivatedRoute) { }
p:number
video:any
  ngOnInit() {
   this.video=this.route.snapshot.data['video'] 
    console.log(this.video)
  }

  
}
