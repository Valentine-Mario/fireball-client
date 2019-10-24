import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Channels');
    this.meta.updateTag({ name: 'fireball channel', content: 'fireball channel page to explore channels' });
  }

}
