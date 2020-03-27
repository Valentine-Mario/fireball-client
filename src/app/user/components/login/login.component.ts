import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router'
import {UserService} from '../../services/user.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {OthersService} from '../../services/others.service'
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private location: Location,
     private fb:FormBuilder, private route:Router, private data:UserService, 
     private modalService: NgbModal, private reuseable:OthersService) { }
loginForm:FormGroup
closeResult:string;
registerForm:FormGroup
forgotPasswordForm:FormGroup
register_spinner:boolean=false
login_spinner:boolean=false
  ngOnInit() {
    this.title.setTitle('login/register');
    this.meta.updateTag({ name: 'fireball login', content: 'fireball login page' });
    this.loginForm=this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', Validators.required]
    })

    this.registerForm=this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.minLength(6), Validators.required]], 
      password_confirmation:['', [Validators.minLength(6), Validators.required]]
    })

    this.forgotPasswordForm=this.fb.group({
      email:['', [Validators.email, Validators.required]]
    })
  }
  
  login(){
    var formData=this.loginForm.value;
    this.login_spinner=true
    this.data.loginUser(formData).subscribe(val=>{
      this.login_spinner=false
     if(val['code']=="00"){
    this.reuseable.successToast('Successful login', `<i class="material-icons"> emoji_emotions </i>`)
       localStorage.setItem('token', val['token'])
       this.location.back()
     }else{
    this.reuseable.errorToast(val['message'], `<i class="material-icons"> mood_bad </i>`)
     }
    })
  }

  register(){
    var formData=this.registerForm.value;
    this.register_spinner=true
    this.data.registerUser(formData).subscribe(val=>{
      this.register_spinner=false
      if(val['code']=="00"){
        this.reuseable.successToast('Welcome to FireBall', `<i class="material-icons"> emoji_emotions </i>`)
           localStorage.setItem('token', val['token'])
           this.location.back()
         }else{
           if(val['message'].email){
            this.reuseable.errorToast("Email has already been taken", `<i class="material-icons"> mood_bad </i>`)
           }else if(val['message'].password_confirmation){
            this.reuseable.errorToast("Password don't match", `<i class="material-icons"> mood_bad </i>`)
           }
         }
    })
  }

forgotPassword(){
  var formData=this.forgotPasswordForm.value
  this.data.forgotPassword(formData).subscribe(val=>{
    if(val['code']=="00"){
      this.reuseable.successToast("Email sent", "Your new password has been sent to your email")
    }else{
      this.reuseable.infoToast('Error', val['message'])
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
