import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Notification');
    this.meta.updateTag({ name: 'fireball notification alert', content: 'fireball notification alert page' });
  }

}
