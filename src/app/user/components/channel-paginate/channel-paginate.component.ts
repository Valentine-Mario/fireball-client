import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router'
import {ChannelService} from '../../services/channel.service'

@Component({
  selector: 'app-channel-paginate',
  templateUrl: './channel-paginate.component.html',
  styleUrls: ['./channel-paginate.component.css']
})
export class ChannelPaginateComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private channelService:ChannelService,
    private router:ActivatedRoute, private route:Router) {
    this.router.params.subscribe(params => this.parameter = params.id)
   }

  channel:any
  total:number
  p:number
  parameter:string
  ngOnInit() {
    this.title.setTitle('Channels');
    this.meta.updateTag({ name: 'fireball channel', content: 'fireball channel page to explore channels' });
    
    this.channel=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total
    this.p=parseInt(this.parameter)
  }

  paginate(a){
    if(a==1){
      this.route.navigate(['/user/channel'])
    }
    else{
    this.route.navigate(['user/channel/'+a])
    this.channelService.getNewChannels(a, 6).subscribe(val=>{
      this.channel=val['message']
    })
    this.p=parseInt(a)
    } 
  }

}
