import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../../services/podcast.service'

@Component({
  selector: 'app-podcast-paginate',
  templateUrl: './podcast-paginate.component.html',
  styleUrls: ['./podcast-paginate.component.css']
})
export class PodcastPaginateComponent implements OnInit {
  p:number
  podcast:any
  searchForm:FormGroup
  parameter:string
  constructor(private podServices:PodcastService, private router:Router, private fb:FormBuilder,
    private route:ActivatedRoute) {
      this.route.params.subscribe(params => this.parameter = params.id)
     }

  ngOnInit() {
    this.p=parseInt(this.parameter)
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
      this.podServices.getallPodcast(a, 6).subscribe(val=>{
        this.podcast=val
      })
     
     this.p=parseInt(a)
    }
  }
  searchPodcast(){
    var formValue=this.searchForm.value
    this.router.navigate(['/adminpanel/action/podcast-list/search/'+formValue.search])
  }

}
