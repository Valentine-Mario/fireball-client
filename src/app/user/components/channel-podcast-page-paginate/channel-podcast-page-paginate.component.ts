import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router'
import {ChannelService} from '../../services/channel.service'


@Component({
  selector: 'app-channel-podcast-page-paginate',
  templateUrl: './channel-podcast-page-paginate.component.html',
  styleUrls: ['./channel-podcast-page-paginate.component.css']
})
export class ChannelPodcastPagePaginateComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private channelService:ChannelService,
    private router:ActivatedRoute, private route:Router) { 
      this.router.params.subscribe(params => this.parameter = params.id)
    }
    parameter:string
    channel:any
    total:number
    p:number
  ngOnInit() {
    this.title.setTitle('Channels');
    this.meta.updateTag({ name: 'fireball channel', content: 'fireball channel page to explore channels' });
    
    this.channel=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total
    this.p=parseInt(this.parameter)
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/channel-podcast'])
    }
    else{
    this.route.navigate(['user/channel-podcast/'+a])
    this.channelService.getPodcastChannel(a, 6).subscribe(val=>{
      this.channel=val['message']
    })
    this.p=parseInt(a)
    } 
  }


}
