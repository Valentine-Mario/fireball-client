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
import { SubscriptionComponent } from './subscription/subscription.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AudiodetailsComponent } from './audiodetails/audiodetails.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { CreateCteContentComponent } from './create-cte-content/create-cte-content.component';
import { ChannelVideoComponent } from './channel-video/channel-video.component';
import { ChannelPodcastComponent } from './channel-podcast/channel-podcast.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SettingComponent } from './setting/setting.component';
import { VidHistoryComponent } from './vid-history/vid-history.component';
import { PodHistoryComponent } from './pod-history/pod-history.component';
import { VidBookmarkComponent } from './vid-bookmark/vid-bookmark.component';
import { PodBookmarkComponent } from './pod-bookmark/pod-bookmark.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {GetLengthOfUsersVideosPodcast, GetUserProfile, GetUserById} from './resolvers/user.resolvers'
import {GetNewChannels, GetMyPodcast,GetVideoChannelPage1, GetVideoChannelPageOther, GetPodcastChannelPage1, GetPodcastChannelPageOther,
   GetMyVideos, GetNewChannelsPage1, GetNewChannelsPageOther, SearchChannel, SearchChannelPageOther,
   GetMyChannel, GetChannelOfUser, GetChannelBYToken} from './resolvers/channel.resolvers'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from './guard/auth.guard'
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChannelPaginateComponent } from './channel-paginate/channel-paginate.component';
import { ChannelVideoPageComponent } from './channel-video-page/channel-video-page.component';
import { ChannelVideoPagePaginateComponent } from './channel-video-page-paginate/channel-video-page-paginate.component';
import { ChannelPodcastPageComponent } from './channel-podcast-page/channel-podcast-page.component';
import { ChannelPodcastPagePaginateComponent } from './channel-podcast-page-paginate/channel-podcast-page-paginate.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';
import { ChannelSearchPaginateComponent } from './channel-search-paginate/channel-search-paginate.component';
import { ChannelSerachFormComponent } from './channel-serach-form/channel-serach-form.component';
import {getSubscriptionPage1, getSubscriptionPageOther, CheckIfUserIsSubscribed} from './resolvers/subscription.resolvers';
import { SubscriptionPaginateComponent } from './subscription-paginate/subscription-paginate.component'
import {FormatNumber} from './pipes/formatNumber';

@NgModule({
  declarations: [HomeComponent, ChannelComponent, PodcastComponent, VideoComponent,
     NotificationComponent, ProfileComponent, LoginComponent, LandingComponent, HeaderComponent,
      FooterComponent, SubscriptionComponent, VideoDetailsComponent, AudiodetailsComponent,
       ChannelDetailsComponent, CreateCteContentComponent, ChannelVideoComponent, 
       ChannelPodcastComponent, SettingComponent, VidHistoryComponent, PodHistoryComponent,
        VidBookmarkComponent, PodBookmarkComponent, ProfileIdComponent, ChannelPaginateComponent, ChannelVideoPageComponent, 
        ChannelVideoPagePaginateComponent, ChannelPodcastPageComponent, ChannelPodcastPagePaginateComponent, ChannelSearchComponent,
         ChannelSearchPaginateComponent, ChannelSerachFormComponent, SubscriptionPaginateComponent, FormatNumber],
  imports: [
    CommonModule,
    UserRouter,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    NgxPaginationModule
    ],
    providers: [GetLengthOfUsersVideosPodcast, GetMyPodcast, GetMyVideos, GetNewChannelsPage1,
      GetNewChannels, AuthGuard, GetNewChannelsPageOther, GetVideoChannelPage1, 
      GetVideoChannelPageOther, GetPodcastChannelPage1, GetPodcastChannelPageOther,
      SearchChannel, SearchChannelPageOther, getSubscriptionPage1, getSubscriptionPageOther,
      GetUserProfile,GetMyChannel, GetUserById, GetChannelOfUser, GetChannelBYToken,
      CheckIfUserIsSubscribed
    ]
})
export class UserModule { }
