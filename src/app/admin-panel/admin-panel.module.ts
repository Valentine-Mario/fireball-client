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
import { GetNewVideo, GetNewVideoPaginate, SearchVideo, SearchVideoPaginate} from '../user/resolvers/video.resolvers';
import {GetNewPodcast, GetNewPodcastPaginate, SearchPodcastPaginate, SearchPodcast} from '../user/resolvers/podcast.resolvers';
import { VideoPaginateComponent } from './components/video-paginate/video-paginate.component';
import { PodcastPaginateComponent } from './components/podcast-paginate/podcast-paginate.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { VideoSearchPaginateComponent } from './components/video-search-paginate/video-search-paginate.component';
import { PodcastSearchPaginateComponent } from './components/podcast-search-paginate/podcast-search-paginate.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import {VideoByToken} from './resolvers/video.resolvers';
import {PodcastByToken} from './resolvers/podcast.resolvers';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, VideoComponent, PodcastComponent,
     LoginComponent, UserPaginateComponent, UserSearchComponent, UserSearchPginateComponent, VideoPaginateComponent, PodcastPaginateComponent, VideoSearchComponent, VideoSearchPaginateComponent, PodcastSearchPaginateComponent, PodcastDetailsComponent, VideoDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers:[AuthGuard, GetAdminProfile, GetNewVideo, GetNewVideoPaginate, SearchVideo, SearchVideoPaginate, VideoByToken,
     GetUserList, GetUserListPaginate, SearchUser, SearchUserPaginate, 
     GetNewPodcast, GetNewPodcastPaginate, PodcastByToken, SearchPodcastPaginate, SearchPodcast]
})
export class AdminPanelModule { }
