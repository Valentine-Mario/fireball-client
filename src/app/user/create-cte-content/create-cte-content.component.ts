import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service'
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpEvent, HttpEventType,HttpResponse} from '@angular/common/http';
import {OthersService} from '../services/others.service'
import { ActivatedRoute } from '@angular/router';
import {VideoService} from '../services/video.service'
import {PodcastService} from '../services/podcast.service'

@Component({
  selector: 'app-create-cte-content',
  templateUrl: './create-cte-content.component.html',
  styleUrls: ['./create-cte-content.component.css']
})
export class CreateCteContentComponent implements OnInit {

  constructor(private data:ChannelService, private fb:FormBuilder, private audioService:PodcastService,
    private reusabele:OthersService, private router:ActivatedRoute, private videoService:VideoService) { }
  selectedPics:any;
  selectedVideo:any;
  selectedAudio:any
  Channelform: FormGroup;
  VideoForm:FormGroup
  AudioForm:FormGroup;
  progress: number = 0;
  progress2: number =0;
  progress3: number =0;
    videos:any
    podcast:any
  ngOnInit() {
    this.Channelform=this.fb.group({
      name:['', Validators.required], 
      description:['', Validators.required], 
      content:['', Validators.required]
    })

    this.VideoForm=this.fb.group({
      title:['', Validators.required], 
      description:['', Validators.required],
      channel:['', Validators.required]
    })

    this.AudioForm=this.fb.group({
      title:['', Validators.required], 
      desciption:['', Validators.required],
      channel:['', Validators.required]
    })
    this.videos=this.router.snapshot.data['video']
    this.podcast=this.router.snapshot.data['podcast']
    
  }

  uploadAudio(){
    var formData=this.AudioForm.value;
    var fd= new FormData;
    fd.append("pod", this.selectedAudio, this.selectedAudio.name)
    fd.append("title", formData.title)
    fd.append("desciption", formData.desciption)
    this.audioService.addPodcast(fd, formData.channel).subscribe((event: HttpEvent<any>)=>{
      switch (event.type) {
        case HttpEventType.Sent:
          break;
        case HttpEventType.ResponseHeader:
          break;
        case HttpEventType.UploadProgress:
          this.progress3 = Math.round(event.loaded / event.total * 100);
          break;
        case HttpEventType.Response:  
      }
      if (event instanceof HttpResponse) {
        if(event.body['code']=="00"){
          this.reusabele.successToast("Podcast uploaded", `<i class="material-icons">check_circle</i>`)
            setTimeout(() => {
              this.progress3 = 0;
            }, 500);
            this.AudioForm=this.fb.group({
              title:['', Validators.required], 
              desciption:['', Validators.required],
              channel:['', Validators.required]
            })
        }else if(event.body['code']=="01"){
          this.reusabele.infoToast("Error Creating Podcast", event.body['message'])
          setTimeout(() => {
            this.progress3 = 0;
          }, 500);
          this.AudioForm=this.fb.group({
            title:['', Validators.required], 
            desciption:['', Validators.required],
            channel:['', Validators.required]
          })
        }else if(event.body['code']=="02"){
          this.reusabele.logoutAndRedirect()
        }
    }
    
  })
  }

  uploadVideo(){
    var formData=this.VideoForm.value;
    var fd= new FormData;
    fd.append("vid", this.selectedVideo, this.selectedVideo.name)
    fd.append('title', formData.title);
    fd.append("description", formData.description)
    this.videoService.addVideo(fd, formData.channel).subscribe((event: HttpEvent<any>)=>{
      switch (event.type) {
        case HttpEventType.Sent:
          break;
        case HttpEventType.ResponseHeader:
          break;
        case HttpEventType.UploadProgress:
          this.progress2 = Math.round(event.loaded / event.total * 100);
          break;
        case HttpEventType.Response:  
      }
      if (event instanceof HttpResponse) {
        if(event.body['code']=="00"){
          this.reusabele.successToast("Video uploaded", `<i class="material-icons">check_circle</i>`)
            setTimeout(() => {
              this.progress2 = 0;
            }, 500);
            this.VideoForm=this.fb.group({
              title:['', Validators.required], 
              description:['', Validators.required],
              channel:['', Validators.required]
            })
        }else if(event.body['code']=="01"){
          this.reusabele.infoToast("Error Creating Video", event.body['message'])
          setTimeout(() => {
            this.progress2 = 0;
          }, 500);
          this.VideoForm=this.fb.group({
            title:['', Validators.required], 
            description:['', Validators.required],
            channel:['', Validators.required]
          })
        }else if(event.body['code']=="02"){
          this.reusabele.logoutAndRedirect()
        }
    }
    
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
          if(event.body['channel'].content==1){
            this.podcast.message.push(event.body['channel'])
          }else{
            this.videos.message.push(event.body['channel'])
          }
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

setVideo(event){
  this.selectedVideo=event.target.files[0]
}

setAudio(event){
  this.selectedAudio=event.target.files[0]
}

}
