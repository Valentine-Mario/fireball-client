import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router'
import {ChannelService} from '../services/channel.service'

@Component({
  selector: 'app-channel-video-page',
  templateUrl: './channel-video-page.component.html',
  styleUrls: ['./channel-video-page.component.css']
})
export class ChannelVideoPageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private channelService:ChannelService,
    private router:ActivatedRoute, private route:Router) { }
    channel:any
    total:number
    p:number=1
  ngOnInit() {
    this.title.setTitle('Channels');
    this.meta.updateTag({ name: 'fireball channel', content: 'fireball channel page to explore channels' });
    
    this.channel=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/channel-video'])
    }else{
      this.route.navigate(['/user/channel-video/'+a])
    }
  }

}
