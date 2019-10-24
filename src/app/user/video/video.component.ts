import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Videos');
    this.meta.updateTag({ name: 'fireball videos', content: 'fireball video page' });
  }

}
