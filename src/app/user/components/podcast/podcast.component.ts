import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../../services/others.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../../services/podcast.service'

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private podservice:  PodcastService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) { }
    podcast:any
    most_listens:any
    p:number
    p2:number;
    searchForm:FormGroup
  ngOnInit() {
    if(localStorage.getItem('token')==undefined){
      this.podcast=this.router.snapshot.data['podcast']
    }else{
      this.podcast=this.router.snapshot.data['feed']
      if(this.podcast.code=="02"){
        this.reuse.logoutAndRedirect()
        this.reuse.infoToast('Try to login again', "Token expired")
      }
      if(this.podcast.message.length <1){
        this.podcast=this.router.snapshot.data['podcast']
        
      }
    }
    this.most_listens=this.router.snapshot.data['most_listens']
    this.title.setTitle('Podcasts');
    this.meta.updateTag({ name: 'fireball podcast', content: 'fireball podcast page' });
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }
  searchPodcast(){
    var formValue=this.searchForm.value
    this.route.navigate(['/user/podcast-search/'+formValue.search])
  }

  paginateMostListens(a){
    this.podservice.mostListenedPodcast(a, 6).subscribe(val=>{
     this.most_listens=val
    })
  }

  paginatePodcast(a){
    if(a==1){
      this.route.navigate(['/user/podcast'])
    }else{
      this.route.navigate(['/user/podcast/'+a])
    }
  }

}
