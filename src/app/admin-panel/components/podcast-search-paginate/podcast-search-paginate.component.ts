import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../../services/podcast.service'

@Component({
  selector: 'app-podcast-search-paginate',
  templateUrl: './podcast-search-paginate.component.html',
  styleUrls: ['./podcast-search-paginate.component.css']
})
export class PodcastSearchPaginateComponent implements OnInit {
  p:number
  podcast:any
  searchForm:FormGroup
  parameter:string
  parameter2:string
  constructor(private podServices:PodcastService, private router:Router, private fb:FormBuilder,
    private route:ActivatedRoute) {
      this.route.params.subscribe(params => this.parameter2 = params.id2)
      this.route.params.subscribe(params => this.parameter = params.id)
     }

  ngOnInit() {
    this.podcast=this.route.snapshot.data['podcast'] 
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
    this.p=parseInt(this.parameter2)

  }
  searchPodcast(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/podcast-list/search/'+formValue.search])
  }
  paginatePodcast(a){
    if(a==1){
      this.router.navigate(['/adminpanel/action/podcast-list/search/'+this.parameter])
    }else{
      this.router.navigate(['/adminpanel/action/podcast-list/search/'+this.parameter+'/'+a])
      this.podServices.searchPodcast(this.parameter, a, 6).subscribe(val=>{
        this.podcast=val
      })
      this.p=parseInt(a)
    }
  }

}
