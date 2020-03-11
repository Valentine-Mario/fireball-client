import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router'
import {OthersService} from '../../../user/services/others.service'
import {AdminService} from '../../services/admin.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private others:OthersService, private admin:AdminService, 
    private fb:FormBuilder, private title:Title) { }
  loginForm:FormGroup
  login_spinner:boolean=false

  ngOnInit() {
    this.title.setTitle('admin login');
    this.loginForm=this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', Validators.required]
    })

  }


  login(){
    var formData=this.loginForm.value;
    this.login_spinner=true

    this.admin.adminLogin(formData).subscribe(val=>{
      this.login_spinner=false
     if(val['code']=="00"){
    this.others.successToast('Successful login', `<i class="material-icons"> emoji_emotions </i>`)
       localStorage.setItem('admin-token', val['token'])
       this.route.navigate(['/adminpanel/action/user'])
     }else{
    this.others.errorToast(val['message'], `<i class="material-icons"> mood_bad </i>`)
     }
    })
  }
}
