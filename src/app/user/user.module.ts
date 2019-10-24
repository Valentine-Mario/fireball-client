import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRouter} from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { ChannelComponent } from './channel/channel.component';
import { PodcastComponent } from './podcast/podcast.component';
import { VideoComponent } from './video/video.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [HomeComponent, ChannelComponent, PodcastComponent, VideoComponent,
     NotificationComponent, ProfileComponent, LoginComponent, LandingComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRouter,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ]
})
export class UserModule { }
