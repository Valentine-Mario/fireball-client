import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, 
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
      this.route.navigate(['/user/channel'])
    }else{
      this.route.navigate(['/user/channel/'+a])
    }
  }

  
}
