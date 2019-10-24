import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  constructor(private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Podcasts');
    this.meta.updateTag({ name: 'fireball podcast', content: 'fireball podcast page' });
  }

}
