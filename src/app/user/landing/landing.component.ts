import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Fireball');
    this.meta.updateTag({ name: 'fireball', content: 'the landing page for fireball where education is free and fun' });
    }
  

}
