import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutes} from './user-routing.module';
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
import {GetLengthOfUsersVideosPodcast, GetUserProfile, GetUserById} from './resolvers/user.resolvers'
import {GetNewChannels, GetMyPodcast,GetVideoChannelPage1, GetVideoChannelPageOther, GetPodcastChannelPage1, GetPodcastChannelPageOther,
   GetMyVideos, GetNewChannelsPage1, GetNewChannelsPageOther, SearchChannel, SearchChannelPageOther,
   GetMyChannel, GetChannelOfUser, GetChannelBYToken} from './resolvers/channel.resolvers'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from './guard/auth.guard'
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
import { RouterModule } from '@angular/router';
import { VideoPagpaginateComponent } from './video-pagpaginate/video-pagpaginate.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { VideoSearchPaginateComponent } from './video-search-paginate/video-search-paginate.component';
import {GetNewVideo,CheckVideoBookmark, GetNewVideoPaginate, GetVideoFeed,VideoByToken2, CheckVideoBookmark2,
    GetVideoFeedPaginate, SearchVideo, SearchVideoPaginate, VideoByToken, MostViewed, 
    GetVideoBookMark, GetVideoBookMarkPginate, GetVideoHistory, GetVideoHistoryPaginate} from './resolvers/video.resolvers'
import {CheckPodcastBookmark2, PodcastByToken2, CheckPodcastBookmark, PodcastByToken, MostListens, 
   SearchPodcastPaginate, SearchPodcast, GetPodcastFeedPaginate, GetPodcastFeed, GetNewPodcastPaginate, 
   GetNewPodcast, GetPodcastBookMark,  GetPodcastBookMarkPaginate, GetPodcastHistory, GetPodcastHistoryPaginate} from './resolvers/podcast.resolvers';
import { PodcastPaginateComponent } from './podcast-paginate/podcast-paginate.component';
import { PodcastSearchComponent } from './podcast-search/podcast-search.component';
import { PodcastSearchPaginateComponent } from './podcast-search-paginate/podcast-search-paginate.component'
import {DateAgoPipe} from './pipes/timeago';
import { PodBookmarkPaginateComponent } from './pod-bookmark-paginate/pod-bookmark-paginate.component';
import { PodHistoryPaginateComponent } from './pod-history-paginate/pod-history-paginate.component';
import { VidBookmarkPaginateComponent } from './vid-bookmark-paginate/vid-bookmark-paginate.component';
import { VidHistoryPaginateComponent } from './vid-history-paginate/vid-history-paginate.component'
import {GetVideoComment, GetPodcastComment} from './resolvers/comment.resolvers'


@NgModule({
  declarations: [HomeComponent, ChannelComponent, PodcastComponent, VideoComponent,
     NotificationComponent, ProfileComponent, LoginComponent, LandingComponent, HeaderComponent,
      FooterComponent, SubscriptionComponent, VideoDetailsComponent, AudiodetailsComponent,
       ChannelDetailsComponent, CreateCteContentComponent, ChannelVideoComponent, 
       ChannelPodcastComponent, SettingComponent, VidHistoryComponent, PodHistoryComponent,
        VidBookmarkComponent, PodBookmarkComponent, ProfileIdComponent, ChannelPaginateComponent, ChannelVideoPageComponent, 
        ChannelVideoPagePaginateComponent, ChannelPodcastPageComponent, ChannelPodcastPagePaginateComponent, ChannelSearchComponent,
         ChannelSearchPaginateComponent, ChannelSerachFormComponent, SubscriptionPaginateComponent, DateAgoPipe,
         FormatNumber, VideoPagpaginateComponent, VideoSearchComponent, VideoSearchPaginateComponent, PodcastPaginateComponent, PodcastSearchComponent, PodcastSearchPaginateComponent, PodBookmarkPaginateComponent, PodHistoryPaginateComponent, VidBookmarkPaginateComponent, VidHistoryPaginateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    NgxSpinnerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ],
    providers: [GetLengthOfUsersVideosPodcast, GetMyPodcast, GetMyVideos, GetNewChannelsPage1,
      GetNewChannels, AuthGuard, GetNewChannelsPageOther, GetVideoChannelPage1, 
      GetVideoChannelPageOther, GetPodcastChannelPage1, GetPodcastChannelPageOther,
      SearchChannel, SearchChannelPageOther, getSubscriptionPage1, getSubscriptionPageOther,
      GetUserProfile,GetMyChannel, GetUserById, GetChannelOfUser, GetChannelBYToken,
      CheckIfUserIsSubscribed, GetNewVideo, GetNewVideoPaginate, GetVideoFeed, GetVideoFeedPaginate,
       SearchVideo, SearchVideoPaginate, VideoByToken, MostViewed,CheckVideoBookmark, VideoByToken2, CheckVideoBookmark2,
       CheckPodcastBookmark2, PodcastByToken2, CheckPodcastBookmark, PodcastByToken, MostListens, 
   SearchPodcastPaginate, SearchPodcast, GetPodcastFeedPaginate, GetPodcastFeed, GetNewPodcastPaginate, GetNewPodcast,
   GetVideoBookMark, GetVideoBookMarkPginate, GetVideoHistory, GetVideoHistoryPaginate,
   GetPodcastBookMark,  GetPodcastBookMarkPaginate, GetPodcastHistory, GetPodcastHistoryPaginate, GetVideoComment,
   GetPodcastComment
    ]
})
export class UserModule { }
