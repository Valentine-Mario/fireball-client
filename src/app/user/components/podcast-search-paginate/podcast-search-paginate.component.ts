import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../../services/others.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../../services/podcast.service'


@Component({
  selector: 'app-podcast-search-paginate',
  templateUrl: './podcast-search-paginate.component.html',
  styleUrls: ['./podcast-search-paginate.component.css']
})
export class PodcastSearchPaginateComponent implements OnInit {

  constructor(private title: Title, private reuse:OthersService, private podservice:  PodcastService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder) {
      this.router.params.subscribe(params => this.parameter = params.id)
      this.router.params.subscribe(params => this.parameter2 = params.id2)
     }
     podcast:any
     p:number
     searchForm:FormGroup
     parameter:string
     parameter2:string

  ngOnInit() {
    this.p=parseInt(this.parameter2)
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
  }
  paginatePodcast(a){
    if(a==1){
      this.route.navigate(['/user/podcast-search/'+this.parameter])
    }
    else{
    this.route.navigate(['/user/podcast-search/'+this.parameter+'/'+a])
    this.podservice.searchPodcast(this.parameter, a, 6).subscribe(val=>{
      this.podcast=val
    })
    this.p=parseInt(a)
    } 
  }

}
