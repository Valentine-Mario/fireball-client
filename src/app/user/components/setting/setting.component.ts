import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import {UserService} from '../../services/user.service';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpEvent, HttpEventType,HttpResponse} from '@angular/common/http';
import {OthersService} from '../../services/others.service'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal, private title: Title, private fb:FormBuilder,
     private router:ActivatedRoute, private userService:UserService, private reuse:OthersService) { }
user:any
editForm:FormGroup
passwordForm:FormGroup
edit_spinner:boolean=false
password_spinner:boolean=false
delete_pics_spinner:boolean=false
selectedPics:any
progress: number = 0;

  ngOnInit() {
    this.title.setTitle("Settings")
    this.user=this.router.snapshot.data['user']
    if(this.user.code!="00"){
      this.reuse.logoutAndRedirect()
      this.reuse.infoToast('Error', this.user.message)
    }
    this.editForm=this.fb.group({
      name:[this.user.message.name, Validators.required],
      email:[this.user.message.email, [Validators.required, Validators.email]]
    })
    this.passwordForm=this.fb.group({
      old_password:['', Validators.required],
      password:['',   [Validators.required, Validators.minLength(6)]]
    })
  }

  editPassword(){
    var formData=this.passwordForm.value
    this.password_spinner=true
    this.userService.editPassword(formData).subscribe(val=>{
      this.password_spinner=false
      if(val['code']=="00"){
        this.reuse.successToast('Success', val['message'])
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  setImage(event){
    this.selectedPics=event.target.files[0]
}

uploadImg(){
  var fd= new FormData;
    fd.append("avatar", this.selectedPics, this.selectedPics.name)
    this.userService.uploadPics(fd).subscribe((event: HttpEvent<any>)=>{
    
    
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
          this.reuse.successToast('Success', 'Pics uploaded successfully')
          
            setTimeout(() => {
              this.progress = 0;
            }, 500);
            
        }else if(event.body['code']=="01"){
          this.reuse.infoToast("Error", event.body['message'])
          setTimeout(() => {
            this.progress = 0;
          }, 500);
        }
    }
    
  })
}
  edit(){
    var formData=this.editForm.value
    this.edit_spinner=true
    this.userService.editProfile(formData).subscribe(val=>{
      this.edit_spinner=false
      if(val['code']=="00"){
        this.reuse.successToast('Success', val['message'])
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }

  deletePics(){
    this.delete_pics_spinner=true
    this.userService.deletePics().subscribe(val=>{
      this.delete_pics_spinner=false
      if(val['code']=="00"){
        this.reuse.successToast('Success', val['message'])
      }else{
        this.reuse.errorToast('Error', val['message'])
      }
    })
  }
  deleteAcc(){
    this.userService.deleteAccount().subscribe(val=>{
      if(val['code']=="00"){
        this.reuse.successToast('Success', val['message'])
        this.reuse.logoutAndRedirect()
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
