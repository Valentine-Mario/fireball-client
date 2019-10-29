import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  closeResult: string;
  constructor(private title: Title, private modalService: NgbModal) { }

  ngOnInit() {
    this.title.setTitle('Username');
  }
  
}
