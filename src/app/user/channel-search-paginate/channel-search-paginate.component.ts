import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router'
import {ChannelService} from '../services/channel.service'

@Component({
  selector: 'app-channel-search-paginate',
  templateUrl: './channel-search-paginate.component.html',
  styleUrls: ['./channel-search-paginate.component.css']
})
export class ChannelSearchPaginateComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private channelService:ChannelService,
    private router:ActivatedRoute, private route:Router) {
    this.router.params.subscribe(params => this.parameter = params.id)
    this.router.params.subscribe(params => this.parameter2 = params.id2)

   }
   parameter:string 
   parameter2:string
   channel:any
   total:number
   p:number
  ngOnInit() {
    this.channel=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total
    this.title.setTitle(`${this.parameter}`);
    this.meta.updateTag({ name: 'fireball channel', content: `search result for ${this.parameter} page ${this.parameter2}` });
    this.p=parseInt(this.parameter2)

  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/channel-search/'+this.parameter])
    }
    else{
    this.route.navigate(['user/channel-search/'+this.parameter+'/'+a])
    this.channelService.searchChannel(this.parameter, a, 6).subscribe(val=>{
      this.channel=val['message']
    })
    this.p=parseInt(a)
    } 
  }


}
