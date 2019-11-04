import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private router:ActivatedRoute) { }
info:any
  ngOnInit() {
    this.title.setTitle('Fireball');
    this.meta.updateTag({ name: 'fireball', content: 'the landing page for fireball where education is free and fun' });
    this.info=this.router.snapshot.data['info'] 
  }
  

}
