import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutes} from './admin-routing.module';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from './guard/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { LoginComponent } from './components/login/login.component';
import {GetAdminProfile} from './resolvers/admin.resolvers'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, VideoComponent, PodcastComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers:[AuthGuard, GetAdminProfile]
})
export class AdminPanelModule { }
