import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute} from '@angular/router'
import {OthersService} from '../services/others.service'
import {ChannelService} from '../services/channel.service'
import {SubscriptionService} from '../services/subscription.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  closeResult: string;
  constructor(private title: Title, private modalService: NgbModal, private reuse:OthersService,
     private router:ActivatedRoute, private channelService:ChannelService, private subServices:SubscriptionService) { }

user:any
channels:any
total:number
sub_loader:boolean=false
subscribers:Array<object>
total_sub:number
p:number
  ngOnInit() {
    this.user=this.router.snapshot.data['user']
    this.title.setTitle(this.user.message.name);
    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Error', this.user.message)
    }
    this.channels=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total

  }


getSubscribers(id, a){
  this.subServices.viewSubscribersInYourChannel(id, a, 30).subscribe(val=>{
    this.sub_loader=true

    if(val['code']=="00"){
      this.sub_loader=false
      this.subscribers=val['message'];
      this.total_sub=val['total']
    }else{
      this.sub_loader=false
      this.modalService.dismissAll()
    }
  })
}
  paginate(a){
    this.channelService.getMyChannel(a, 6).subscribe(val=>{
      this.channels=val['message']
    })
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
