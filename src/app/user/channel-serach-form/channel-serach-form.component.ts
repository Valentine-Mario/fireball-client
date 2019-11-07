import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-channel-serach-form',
  templateUrl: './channel-serach-form.component.html',
  styleUrls: ['./channel-serach-form.component.css']
})
export class ChannelSerachFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private route:Router) { }
  searchForm:FormGroup

  ngOnInit() {
    this.searchForm=this.fb.group({
      search:['', Validators.required]
    })
  }
  search(){
    var a=this.searchForm.value
    this.route.navigate(['/user/channel-search/'+a.search])
  }

}
