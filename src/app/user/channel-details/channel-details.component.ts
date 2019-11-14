import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router'
import {OthersService} from '../services/others.service'
import { Meta, Title } from '@angular/platform-browser';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ChannelService} from '../services/channel.service'
import { HttpEvent, HttpEventType,HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {
channel_description:boolean
  constructor(private modalService: NgbModal, private route:Router,private title: Title, private meta: Meta,
     private data:OthersService, private router:ActivatedRoute, private fb:FormBuilder, private channelService:ChannelService) { }
  closeResult:string
  channel:any
  user2:any
show_item:boolean
editForm:FormGroup
edit_spinner:boolean=false
selectedPics:any
progress: number = 0;
delete_spinner:boolean=false;
  ngOnInit() {
    this.channel_description=true;
    this.data.currentMessage.subscribe(message => this.channel_description = message)
    this.channel=this.router.snapshot.data['channel']
    this.user2=this.router.snapshot.data['user']
    this.title.setTitle(this.channel.message.name);
    this.meta.updateTag({ name: this.channel.message.name, content: this.channel.message.description });
    if(localStorage.getItem('token')==undefined){
      this.show_item=false
    }else{
      this.show_item=true
      if(this.user2.code!="00"){
        this.data.logoutAndRedirect()
        this.data.infoToast('Error', this.user2.message)
      }
    }
    this.editForm=this.fb.group({
      name:[ this.channel.message.name, Validators.required],
      description:[this.channel.message.description, Validators.required]
    })
    
  }

  setImage(event){
    this.selectedPics=event.target.files[0]
}

uploadImg(){
  var fd= new FormData;
    fd.append("image", this.selectedPics, this.selectedPics.name)
    this.channelService.changeChannelImage(this.channel.message.id, fd).subscribe((event: HttpEvent<any>)=>{
    
    
      switch (event.type) {
        case HttpEventType.Sent:
          break;
        case HttpEventType.ResponseHeader:
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          break;
        case HttpEventType.Response:  
      }
      if (event instanceof HttpResponse) {
        if(event.body['code']=="00"){
          this.data.successToast('Success', 'Pics uploaded successfully')
          
            setTimeout(() => {
              this.progress = 0;
            }, 500);
            this.channel.channel_pics=event.body['image']
        }else if(event.body['code']=="01"){
          this.data.infoToast("Error", event.body['message'])
          setTimeout(() => {
            this.progress = 0;
          }, 500);
        }
    }
    
  })
}
delete(){
  this.channelService.deleteChannel(this.channel.message.id).subscribe(val=>{
    this.delete_spinner=true
    if(val['code']=="00"){
      this.delete_spinner=false
      this.route.navigate(['/user/addcontent'])
      this.data.successToast('Success', 'Channel deleted successfully')
    }else{
      this.delete_spinner=false
      this.data.errorToast('Error', "error deleting channel")
    }
  })
}
  edit(){
   var formData=this.editForm.value
   this.channelService.editChannel(this.channel.message.id, formData).subscribe(val=>{
     this.edit_spinner=true;
     if(val['code']=="00"){
       this.edit_spinner=false;
       this.data.successToast('Success', val['message'])
       this.channel.message.name=formData.name
       this.channel.message.description=formData.description
     }else{
       this.data.errorToast('Error', val['message'])
       this.edit_spinner=false;
     }
   })
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
