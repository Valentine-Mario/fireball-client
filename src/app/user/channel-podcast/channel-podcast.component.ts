import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {OthersService} from '../services/others.service'
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {PodcastService} from '../services/podcast.service'
import { Location } from '@angular/common';
import {CommentService} from '../services/comment.service'


@Component({
  selector: 'app-channel-podcast',
  templateUrl: './channel-podcast.component.html',
  styleUrls: ['./channel-podcast.component.css']
})
export class ChannelPodcastComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private modalService:NgbModal, private title: Title, private reuse:OthersService, private podservice:PodcastService,
    private meta: Meta, private route:Router, private router:ActivatedRoute, private fb:FormBuilder,
    private location:Location, private commentServices:CommentService) {
      this.router.params.subscribe(params => this.parameter = params.id2)
      route.events.forEach((event) => {
        if(event instanceof NavigationEnd) {
         this.loadNew()
        }
        
      });
     }
    closeResult:string
    user:any
    bookmark:boolean
    reportForm:FormGroup
    editForm:FormGroup
    podcast:any
    parameter:string
    commentForm:FormGroup
    replyForm:FormGroup
    comments:any
    p:number
  ngOnInit() {
    setTimeout(() => {
      this.reuse.changeMessage(false)

    }, 1000);
    this.podcast=this.router.snapshot.data['podcast']
      this.user=this.router.snapshot.data['user']
      this.comments=this.router.snapshot.data['comment']

      this.title.setTitle(this.podcast.message.title);
      this.meta.updateTag({ name: this.podcast.message.title, content: this.podcast.message.description });
      if(this.podcast.code=="01"){
        this.location.back()
        this.reuse.infoToast('Suspended', this.podcast.message)
      }
      if(this.user.code!="00"){
        this.reuse.logoutAndRedirect();
        this.reuse.infoToast('Try to login again', "Token expired")
      }

      setTimeout(() => {
        this.bookmark=this.router.snapshot.data['bookmark'].message
      }, 1000);
      
       //forms
       this.replyForm=this.fb.group({
        comment:['', Validators.required],

      })
      this.commentForm=this.fb.group({
        comment:['', Validators.required]
      })
      this.reportForm=this.fb.group({
        report:['', Validators.required]
      })
      this.editForm=this.fb.group({
        title:[this.podcast.message.title, Validators.required],
        desciption:[this.podcast.message.desciption, Validators.required]
      })
  }

  addComment(){
    var formValue=this.commentForm.value
    this.commentServices.addPodcastComment(formValue, this.podcast.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast('Comment added', '')
        var push_data={
          comment:val['message'].comment,
          created_at:val['message'].created_at,
          id:val['message'].id,
          user:{
            name: val['message'].user.name,
            token:val['message'].user.token
          },
          podcastreplies:[]
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
    this.commentServices.addPodcastCommentReplies(formValue, a.id).subscribe(val=>{
      if(val['code']=="00"){
        var push_data={
          comment:val['message'].comment,
          created_at:val['message'].created_at,
          user:{
            name:val['message'].user.name,
            token:val['message'].user.token
          }
        }
        a.podcastreplies.push(push_data)
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
    this.commentServices.DeletePodcastReply(b.id).subscribe(val=>{
      if(val['code']=="00"){
        a.podcastreplies.splice(a.podcastreplies.indexOf(b), 1)
      }else{
        this.reuse.errorToast("Error", val['message'])
      }
    })
  }


  deleteComment(a){
    this.commentServices.deletePodcastComment(a.id).subscribe(val=>{
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
    this.commentServices.getPodcastComment(this.parameter, e, 5).subscribe(val=>{
      this.comments.message=val['message']
    })
    this.p=parseInt(e)
  }
  
  editPodcast(){
    var formValue=this.editForm.value
    this.podservice.editPodcast(formValue, this.podcast.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast('Successful', val['message'])
        this.podcast.message.title=formValue.title
        this.podcast.message.desciption=formValue.desciption
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  deletepodcast(){
    this.podservice.deletePodcast(this.podcast.message.id).subscribe(val=>{
      this.reuse.successToast('Success', val['message'])
      this.route.navigate(['/user/addcontent'])

    })
  }

  bookmark_func(){
    this.podservice.bookmarkPodcast(this.podcast.message.id).subscribe(val=>{
      if(val['code']=="00"){
        setTimeout(() => {
          this.bookmark=val['bookmark']
        }, 1000);
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  report(){
    var formValue=this.reportForm.value
    this.podservice.reportPodcast(formValue, this.podcast.message.id).subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast('Sent', val['message'])
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  loadNew(){
    this.podservice.getPodcastByToken(this.parameter).subscribe(val=>{
      this.podcast=val
      this.title.setTitle(this.podcast.message.title);

      this.podservice.checkPodcastBookMark(this.parameter).subscribe(value=>{
        this.bookmark=value['message']
      })
    })
    this.commentServices.getPodcastComment(this.parameter, 1, 5).subscribe(val=>{
      this.comments=val
    })
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

  ngOnChanges(){
    
  }
  ngOnDestroy(){
    this.reuse.changeMessage(true)
  }

}
