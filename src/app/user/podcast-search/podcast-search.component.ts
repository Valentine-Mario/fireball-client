import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../services/others.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../services/podcast.service'
@Component({
  selector: 'app-podcast-search',
  templateUrl: './podcast-search.component.html',
  styleUrls: ['./podcast-search.component.css']
})
export class PodcastSearchComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private podservice:  PodcastService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) {
      this.router.params.subscribe(params => this.parameter = params.id)
     }
     podcast:any
     p:number
     searchForm:FormGroup
     parameter:string
  ngOnInit() {
    this.title.setTitle(this.parameter);
    this.meta.updateTag({ name: 'fireball videos', content: `Search result for ${this.parameter}` });
    this.podcast=this.router.snapshot.data['podcast']
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }

  searchPodcast(){
    var formValue=this.searchForm.value
    this.route.navigate(['/user/podcast-search/'+formValue.search])
    this.podservice.searchPodcast(formValue.search, 1, 6).subscribe(val=>{
      this.podcast=val
    })
  }
  paginatePodcast(a){
    if(a==1){
      this.route.navigate(['/user/podcast-search/'+this.parameter])
    }else{
      this.route.navigate(['/user/podcast-search/'+this.parameter+'/'+a])
    }
  }

}
