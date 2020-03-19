import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  p:number
  podcast:any
  searchForm:FormGroup
  constructor(private router:Router, private fb:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.podcast=this.route.snapshot.data['podcast'] 
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }
  paginatePodcast(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/podcast-list'])
    }else{
      this.router.navigate(['/adminpanel/action/podcast-list/'+a])
    }
  }
  searchPodcast(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/podcast-list/search/'+formValue.search])
  }
}
