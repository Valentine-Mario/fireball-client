import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute} from '@angular/router'
import {OthersService} from '../services/others.service'
import {ChannelService} from '../services/channel.service'
import {SubscriptionService} from '../services/subscription.service'


@Component({
  selector: 'app-profile-id',
  templateUrl: './profile-id.component.html',
  styleUrls: ['./profile-id.component.css']
})
export class ProfileIdComponent implements OnInit {
  closeResult: string;

  constructor(private title: Title, private modalService: NgbModal,  private meta: Meta, private reuse:OthersService,
    private router:ActivatedRoute, private channelService:ChannelService, private subServices:SubscriptionService) {
      this.router.params.subscribe(params => this.parameter = params.id)
     }
parameter:string
user:any
user2:any
show_item:boolean
channels:any
total:number
sub_loader:boolean=false
subscribers:Array<object>
total_sub:number
p:number
  ngOnInit() {
    this.user=this.router.snapshot.data['user']
    this.user2=this.router.snapshot.data['user2']
    this.channels=this.router.snapshot.data['channel'].message
    this.total=this.router.snapshot.data['channel'].total
    
    this.title.setTitle(this.user.message.name);
    this.meta.updateTag({ name: `${this.user.message.name} profile`, content: `the fireball profile page of ${this.user.message.name}` });
    if(localStorage.getItem('token')==undefined){
      this.show_item=false
    }else{
      this.show_item=true
      if(this.user2.code!="00"){
        this.reuse.logoutAndRedirect()
        this.reuse.infoToast('Error', this.user2.message)
      }
    }

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
    this.channelService.getChannelOfUser(this.parameter, a, 6).subscribe(val=>{
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
