import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../../services/others.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../../services/podcast.service'
@Component({
  selector: 'app-podcast-paginate',
  templateUrl: './podcast-paginate.component.html',
  styleUrls: ['./podcast-paginate.component.css']
})
export class PodcastPaginateComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private podservice:  PodcastService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) {
      this.router.params.subscribe(params => this.parameter = params.id)
     }
    podcast:any
    p:number
    searchForm:FormGroup
    parameter:string
  ngOnInit() {
    this.p=parseInt(this.parameter)
    this.title.setTitle('Podcasts');
    this.meta.updateTag({ name: 'fireball podcasts', content: 'fireball podcast page' });
    if(localStorage.getItem('token')==undefined){
      this.podcast=this.router.snapshot.data['podcast']
    }else{
      this.podcast=this.router.snapshot.data['feed']
      if(this.podcast.code=="02"){
        this.reuse.logoutAndRedirect()
        this.reuse.infoToast('Error', this.podcast['message'])
      }
      if(this.podcast.message.length <1){
        this.podcast=this.router.snapshot.data['podcast']
        
      }
    }

  
  this.searchForm=this.fb.group({
    search:['', Validators.required]
  })
}
searchPodcast(){
  var formValue=this.searchForm.value
  this.route.navigate(['/user/podcast-search/'+formValue.search])
}

  paginatePodcast(a){
    if(a==1){
      this.route.navigate(['/user/podcast'])
    }
    else{
    this.route.navigate(['/user/podcast/'+a])
    if(localStorage.getItem('token')==undefined|| this.router.snapshot.data['feed'].message.length <1){
     this.podservice.getNewPodcasts(a, 6).subscribe(val=>{
       this.podcast=val
     })
    }else{
      this.podcast=this.router.snapshot.data['feed']
      this.podservice.getPodcastFeed(a, 6).subscribe(val=>{
        this.podcast=val
        
      })
    }
    this.p=parseInt(a)
    } 
  }

}
