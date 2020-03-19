import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../../services/podcast.service'
@Component({
  selector: 'app-podcast-search',
  templateUrl: './podcast-search.component.html',
  styleUrls: ['./podcast-search.component.css']
})
export class PodcastSearchComponent implements OnInit {
  p:number
  podcast:any
  searchForm:FormGroup
  parameter:string
  constructor(private podServices:PodcastService, private router:Router, private fb:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.podcast=this.route.snapshot.data['podcast'] 
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }

  searchPodcast(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/podcast-list/search/'+formValue.search])
    this.podServices.searchPodcast(formValue.search, 1, 6).subscribe(val=>{
      this.podcast=val
    })
  }
  paginatePodcast(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/podcast-list/search/'+this.parameter])
    }else{
      this.router.navigate(['/adminpanel/action/podcast-list/search/'+this.parameter+'/'+a])
    }
  }

}
