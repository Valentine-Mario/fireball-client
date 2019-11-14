import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router'
import {OthersService} from '../services/others.service'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {
channel_description:boolean
  constructor(private modalService: NgbModal, private route:Router,private title: Title, private meta: Meta,
     private data:OthersService, private router:ActivatedRoute) { }
  closeResult:string
  channel:any
  ngOnInit() {
    this.channel_description=true;
    this.data.currentMessage.subscribe(message => this.channel_description = message)
    this.channel=this.router.snapshot.data['channel']
    this.title.setTitle(this.channel.message.name);
    this.meta.updateTag({ name: this.channel.message.name, content: this.channel.message.description });
    console.log(this.channel)
    
  }

  
  
  hideDescription(){
    this.channel_description=false;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
