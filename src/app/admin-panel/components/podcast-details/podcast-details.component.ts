import { Component, OnInit } from '@angular/core';
import {OthersService} from '../../../user/services/others.service'
import {Router, ActivatedRoute} from '@angular/router'
import {PodcastService} from '../../services/podcast.service'

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})
export class PodcastDetailsComponent implements OnInit {

  constructor(private reuseable:OthersService, private router:Router,
    private route:ActivatedRoute, private podService:PodcastService) {
      this.route.params.subscribe(params => this.parameter = params.id)
     }
    p:number
    podcast:any
    report:any
    parameter:string
  ngOnInit() {
    this.podcast=this.route.snapshot.data['podcast']
    this.report=this.route.snapshot.data['report']
  }
  paginateComment(a){
    this.podService.getPodcastReports(this.parameter, a, 10).subscribe(val=>{
      this.report.message=val['message']
    })
    this.p=parseInt(a)
  }

  suspendPodcast(){
    this.podService.suspendPodcast(this.podcast.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast("", "podcast suspended successfully")
        this.podcast.message.suspended=true
      }else{
        this.reuseable.errorToast("", 'error suspending podcast')
      }
    })
  }

  unsuspendPodcast(){
    this.podService.unsuspendPodcast(this.podcast.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuseable.infoToast("", "podcast unsuspended successfully")
        this.podcast.message.suspended=false
      }else{
        this.reuseable.errorToast("", 'error unsuspending podcast')
      }
    })
  }
}
