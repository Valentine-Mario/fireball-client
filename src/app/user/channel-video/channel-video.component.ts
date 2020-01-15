import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {OthersService} from '../services/others.service'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {VideoService} from '../services/video.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import {CommentService} from '../services/comment.service'

@Component({
  selector: 'app-channel-video',
  templateUrl: './channel-video.component.html',
  styleUrls: ['./channel-video.component.css']
})
export class ChannelVideoComponent implements OnInit, OnDestroy{
closeResult:string
  constructor(private modalService:NgbModal,  private title: Title, private reuse:OthersService, private vidservice:VideoService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder,
    private location:Location, private commentServices:CommentService) { 
      this.router.params.subscribe(params => this.parameter = params.id2)
      route.events.forEach((event) => {
        if(event instanceof NavigationEnd) {
         this.loadNew()
        }
        
      });
    }
    parameter:string
    video:any
    user:any
    bookmark:boolean
    reportForm:FormGroup
    editForm:FormGroup
    video_link:string
    comments:any
    p:number
    commentForm:FormGroup
replyForm:FormGroup
  ngOnInit() {
    setTimeout(() => {
      this.reuse.changeMessage(false)

    }, 1000);
    this.video=this.router.snapshot.data['video']
      this.user=this.router.snapshot.data['user']
      this.title.setTitle(this.video.message.title);
      this.comments=this.router.snapshot.data['comment']

      this.meta.updateTag({ name: this.video.message.title, content: this.video.message.description });
      if(this.video.code=="01"){
        this.location.back()
        this.reuse.infoToast('Suspended', this.video.message)
      }
      if(this.user.code!="00"){
        this.reuse.logoutAndRedirect();
        this.reuse.infoToast('Try to login again', "Token expired")

      }
      setTimeout(() => {
        this.bookmark=this.router.snapshot.data['bookmark'].message
      }, 1000);


      //forms for component
      this.commentForm=this.fb.group({
        comment:['', Validators.required]
      })

      this.replyForm=this.fb.group({
        comment:['', Validators.required],

      })
      this.reportForm=this.fb.group({
        report:['', Validators.required]
      })
      this.editForm=this.fb.group({
        title:[this.video.message.title, Validators.required],
        description:[this.video.message.description, Validators.required]
      })
      
  }

  addComment(){
    var formValue=this.commentForm.value
    this.commentServices.addVideoComment(formValue, this.video.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.comments.message.length < 1 == false
        this.reuse.successToast('Comment added', '')
        var push_data={
          comment:val['message'].comment,
          created_at:val['message'].created_at,
          user:{
            name: val['message'].user.name,
            token:val['message'].user.token
          }
        }
        this.comments.message.push(push_data)
        this.commentForm=this.fb.group({
          comment:['', Validators.required]
        })
  
      }else{
        this.reuse.errorToast('Error adding comment', val['message'])
      }
    })
  }

  replyComment(a){
    var formValue=this.replyForm.value
    this.commentServices.addVideoCommentReplies(formValue, a.id).subscribe(val=>{
      if(val['code']=="00"){
        var push_data={
          comment:val['message'].comment,
          created_at:val['message'].created_at,
          user:{
            name:val['message'].user.name,
            token:val['message'].user.token
          }
        }
        a.videoreplies.push(push_data)
        this.reuse.successToast('replied', 'reply added successfully')
        this.replyForm=this.fb.group({
          comment:['', Validators.required],
  
        })
      }else{
          this.reuse.errorToast('error', val['message'])
      }
    })
  }

  deleteReply(a, b){
    this.commentServices.DeleteVideoReply(b.id).subscribe(val=>{
      if(val['code']=="00"){
        a.videoreplies.splice(a.videoreplies.indexOf(b), 1)
      }else{
        this.reuse.errorToast("Error", val['message'])
      }
    })
  }


  deleteComment(a){
    this.commentServices.deleteVideoComment(a.id).subscribe(val=>{
      if(val['code']=="00"){
        var index=this.comments.message.indexOf(a)
        this.comments.message.splice(index, 1);
        this.reuse.successToast('Comment removed', '')
      }else{
        this.reuse.errorToast('Error removing comment', val['message'])
      }
    })
  }


  paginateComment(e){
    this.commentServices.getVideoComments(this.parameter, e, 5).subscribe(val=>{
      this.comments.message=val['message']
    })
    this.p=parseInt(e)
  }
  loadNew(){
    this.vidservice.getVideoByToken(this.parameter).subscribe(val=>{
      this.video=val
      
      
      this.title.setTitle(this.video.message.title);
      this.vidservice.checkVideoBookMark(this.parameter).subscribe(value=>{
     
        this.bookmark=value['message']
      })
    })
    this.commentServices.getVideoComments(this.parameter, 1, 5).subscribe(val=>{
      this.comments=val
    })
  }
  deleteVideo(){
    this.vidservice.deleteVideo(this.video.message.id).subscribe(val=>{
      this.reuse.successToast('Success', val['message'])
      this.route.navigate(['/user/addcontent'])

    })
    
  }

  editVideo(){
    var formValue=this.editForm.value
    this.vidservice.editVideo(formValue, this.video.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast('Successful', val['message'])
        this.video.message.title=formValue.title
        this.video.message.description=formValue.description
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  report(){
    var formValue=this.reportForm.value
    this.vidservice.reportVideo(formValue, this.video.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast('Sent', val['message'])
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  bookmark_func(){
    this.vidservice.bookmarkVideo(this.video.message.id).subscribe(val=>{
      if(val['code']=="00"){
        setTimeout(() => {
          this.bookmark=val['bookmark']
        }, 1000);
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  ngOnDestroy(){
    this.reuse.changeMessage(true)
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
