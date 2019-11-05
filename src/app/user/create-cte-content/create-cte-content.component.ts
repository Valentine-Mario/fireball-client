import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service'
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpEvent, HttpEventType,HttpResponse} from '@angular/common/http';
import {OthersService} from '../services/others.service'



@Component({
  selector: 'app-create-cte-content',
  templateUrl: './create-cte-content.component.html',
  styleUrls: ['./create-cte-content.component.css']
})
export class CreateCteContentComponent implements OnInit {

  constructor(private data:ChannelService, private fb:FormBuilder, private reusabele:OthersService) { }
  selectedPics:any;
  Channelform: FormGroup;
  progress: number = 0;

  ngOnInit() {
    this.Channelform=this.fb.group({
      name:['', Validators.required], 
      description:['', Validators.required], 
      content:['', Validators.required]
    })
  }

  uploadChannel(){
  var formData=this.Channelform.value
  var fd= new FormData;
  fd.append("image", this.selectedPics, this.selectedPics.name)
  fd.append("name", formData.name)
  fd.append("description", formData.description)
  fd.append("content", formData.content)
  this.data.addChannel(fd).subscribe((event: HttpEvent<any>)=>{
    
    
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
          this.reusabele.successToast("Channel created", `<i class="material-icons">check_circle</i>`)
            setTimeout(() => {
              this.progress = 0;
            }, 500);
            this.Channelform=this.fb.group({
              name:['', Validators.required], 
              description:['', Validators.required], 
              content:['', Validators.required]
            })
        }else if(event.body['code']=="01"){
          this.reusabele.infoToast("Error Creating Channel", event.body['message'])
          setTimeout(() => {
            this.progress = 0;
          }, 500);
          this.Channelform=this.fb.group({
            name:['', Validators.required], 
            description:['', Validators.required], 
            content:['', Validators.required]
          })
        }else if(event.body['code']=="02"){
          this.reusabele.logoutAndRedirect()
        }
    }
    
  })
  }

  setChannelImage(event){
    this.selectedPics=event.target.files[0]
}

}
