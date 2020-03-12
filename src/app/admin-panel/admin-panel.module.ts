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
import {GetUserList, GetUserListPaginate, SearchUser, SearchUserPaginate} from './resolvers/user.resolvers';
import { UserPaginateComponent } from './components/user-paginate/user-paginate.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserSearchPginateComponent } from './components/user-search-pginate/user-search-pginate.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, VideoComponent, PodcastComponent,
     LoginComponent, UserPaginateComponent, UserSearchComponent, UserSearchPginateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers:[AuthGuard, GetAdminProfile, GetUserList, GetUserListPaginate, SearchUser, SearchUserPaginate]
})
export class AdminPanelModule { }
