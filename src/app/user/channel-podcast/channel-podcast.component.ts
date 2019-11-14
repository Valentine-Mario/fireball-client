import { Component, OnInit, OnDestroy } from '@angular/core';
import {OthersService} from '../services/others.service'


@Component({
  selector: 'app-channel-podcast',
  templateUrl: './channel-podcast.component.html',
  styleUrls: ['./channel-podcast.component.css']
})
export class ChannelPodcastComponent implements OnInit, OnDestroy {

  constructor(private data:OthersService) { }

  ngOnInit() {
    this.data.changeMessage(false)
  }
  ngOnDestroy(){
    this.data.changeMessage(true)
  }

}
