import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {OthersService} from '../../services/others.service'
import {PodcastService} from '../../services/podcast.service'

@Component({
  selector: 'app-pod-history',
  templateUrl: './pod-history.component.html',
  styleUrls: ['./pod-history.component.css']
})
export class PodHistoryComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router,
    private reuse:OthersService, private podcastServices:PodcastService) { }
    podcasts:any;
    p:number=1
    user:any
  ngOnInit() {
    this.podcasts=this.router.snapshot.data['podcast']
    this.user=this.router.snapshot.data['user']

    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Try to login again', "Token expired")
    }
  }

  paginate(e){
    if(e==1){
      this.route.navigate(['/user/podcasthistory'])
    }else{
      this.route.navigate(['/user/podcasthistory/'+e])
  }
  }

}
