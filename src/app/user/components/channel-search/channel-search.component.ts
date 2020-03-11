import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router'
import {ChannelService} from '../../services/channel.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-channel-search',
  templateUrl: './channel-search.component.html',
  styleUrls: ['./channel-search.component.css']
})
export class ChannelSearchComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private channelService:ChannelService,
    private router:ActivatedRoute, private route:Router, private fb:FormBuilder) {
      this.router.params.subscribe(params => this.parameter = params.id)

     }
    parameter:string 
    channel:any
    total:number
    p:number=1
    searchForm:FormGroup
  ngOnInit() {    
    this.channel=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total
    this.title.setTitle(`${this.parameter}`);
    this.meta.updateTag({ name: 'fireball channel', content: `search result for ${this.parameter}` });
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/channel-search/'+this.parameter])
    }else{
      this.route.navigate(['/user/channel-search/'+this.parameter+'/'+a])
    }
  }

  search(){
    var a=this.searchForm.value
    this.route.navigate(['/user/channel-search/'+a.search])
    this.channelService.searchChannel(a.search, 1, 6).subscribe(val=>{
      this.channel=val['message'];
      this.total=val['total']
      this.title.setTitle(`${a.search}`);

    })
  }
  

}
