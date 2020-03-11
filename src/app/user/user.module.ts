import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutes} from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChannelComponent } from './components/channel/channel.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { VideoComponent } from './components/video/video.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'
import { NgxSpinnerModule } from "ngx-spinner";
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { AudiodetailsComponent } from './components/audiodetails/audiodetails.component';
import { ChannelDetailsComponent } from './components/channel-details/channel-details.component';
import { CreateCteContentComponent } from './components/create-cte-content/create-cte-content.component';
import { ChannelVideoComponent } from './components/channel-video/channel-video.component';
import { ChannelPodcastComponent } from './components/channel-podcast/channel-podcast.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SettingComponent } from './components/setting/setting.component';
import { VidHistoryComponent } from './components/vid-history/vid-history.component';
import { PodHistoryComponent } from './components/pod-history/pod-history.component';
import { VidBookmarkComponent } from './components/vid-bookmark/vid-bookmark.component';
import { PodBookmarkComponent } from './components/pod-bookmark/pod-bookmark.component';
import { ProfileIdComponent } from './components/profile-id/profile-id.component';
import {GetLengthOfUsersVideosPodcast, GetUserProfile, GetUserById} from './resolvers/user.resolvers'
import {GetNewChannels, GetMyPodcast,GetVideoChannelPage1, GetVideoChannelPageOther, GetPodcastChannelPage1, GetPodcastChannelPageOther,
   GetMyVideos, GetNewChannelsPage1, GetNewChannelsPageOther, SearchChannel, SearchChannelPageOther,
   GetMyChannel, GetChannelOfUser, GetChannelBYToken} from './resolvers/channel.resolvers'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from './guard/auth.guard'
import {NgxPaginationModule} from 'ngx-pagination';
import { ChannelPaginateComponent } from './components/channel-paginate/channel-paginate.component';
import { ChannelVideoPageComponent } from './components/channel-video-page/channel-video-page.component';
import { ChannelVideoPagePaginateComponent } from './components/channel-video-page-paginate/channel-video-page-paginate.component';
import { ChannelPodcastPageComponent } from './components/channel-podcast-page/channel-podcast-page.component';
import { ChannelPodcastPagePaginateComponent } from './components/channel-podcast-page-paginate/channel-podcast-page-paginate.component';
import { ChannelSearchComponent } from './components/channel-search/channel-search.component';
import { ChannelSearchPaginateComponent } from './components/channel-search-paginate/channel-search-paginate.component';
import { ChannelSerachFormComponent } from './components/channel-serach-form/channel-serach-form.component';
import {getSubscriptionPage1, getSubscriptionPageOther, CheckIfUserIsSubscribed} from './resolvers/subscription.resolvers';
import { SubscriptionPaginateComponent } from './components/subscription-paginate/subscription-paginate.component'
import {FormatNumber} from './pipes/formatNumber';
import { RouterModule } from '@angular/router';
import { VideoPagpaginateComponent } from './components/video-pagpaginate/video-pagpaginate.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { VideoSearchPaginateComponent } from './components/video-search-paginate/video-search-paginate.component';
import {GetNewVideo,CheckVideoBookmark, GetNewVideoPaginate, GetVideoFeed,VideoByToken2, CheckVideoBookmark2,
    GetVideoFeedPaginate, SearchVideo, SearchVideoPaginate, VideoByToken, MostViewed, 
    GetVideoBookMark, GetVideoBookMarkPginate, GetVideoHistory, GetVideoHistoryPaginate} from './resolvers/video.resolvers'
import {CheckPodcastBookmark2, PodcastByToken2, CheckPodcastBookmark, PodcastByToken, MostListens, 
   SearchPodcastPaginate, SearchPodcast, GetPodcastFeedPaginate, GetPodcastFeed, GetNewPodcastPaginate, 
   GetNewPodcast, GetPodcastBookMark,  GetPodcastBookMarkPaginate, GetPodcastHistory, GetPodcastHistoryPaginate} from './resolvers/podcast.resolvers';
import { PodcastPaginateComponent } from './components/podcast-paginate/podcast-paginate.component';
import { PodcastSearchComponent } from './components/podcast-search/podcast-search.component';
import { PodcastSearchPaginateComponent } from './components/podcast-search-paginate/podcast-search-paginate.component'
import {DateAgoPipe} from './pipes/timeago';
import { PodBookmarkPaginateComponent } from './components/pod-bookmark-paginate/pod-bookmark-paginate.component';
import { PodHistoryPaginateComponent } from './components/pod-history-paginate/pod-history-paginate.component';
import { VidBookmarkPaginateComponent } from './components/vid-bookmark-paginate/vid-bookmark-paginate.component';
import { VidHistoryPaginateComponent } from './components/vid-history-paginate/vid-history-paginate.component'
import {GetVideoComment, GetPodcastComment} from './resolvers/comment.resolvers';
import { NotificationPaginateComponent } from './components/notification-paginate/notification-paginate.component'
import {GetVideoNotif, GetPodcastNotif, GetNotifLength, GetVideoNotifPaginate, GetPodcastNotifPaginate} from './resolvers/notification.resolvers'

@NgModule({
  declarations: [HomeComponent, ChannelComponent, PodcastComponent, VideoComponent,
     NotificationComponent, ProfileComponent, LoginComponent, LandingComponent, HeaderComponent,
      FooterComponent, SubscriptionComponent, VideoDetailsComponent, AudiodetailsComponent,
       ChannelDetailsComponent, CreateCteContentComponent, ChannelVideoComponent, 
       ChannelPodcastComponent, SettingComponent, VidHistoryComponent, PodHistoryComponent,
        VidBookmarkComponent, PodBookmarkComponent, ProfileIdComponent, ChannelPaginateComponent, ChannelVideoPageComponent, 
        ChannelVideoPagePaginateComponent, ChannelPodcastPageComponent, ChannelPodcastPagePaginateComponent, ChannelSearchComponent,
         ChannelSearchPaginateComponent, ChannelSerachFormComponent, SubscriptionPaginateComponent, DateAgoPipe,
         FormatNumber, VideoPagpaginateComponent, VideoSearchComponent, VideoSearchPaginateComponent, PodcastPaginateComponent, PodcastSearchComponent, PodcastSearchPaginateComponent, PodBookmarkPaginateComponent, PodHistoryPaginateComponent, VidBookmarkPaginateComponent, VidHistoryPaginateComponent, NotificationPaginateComponent],
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
   GetPodcastComment, GetVideoNotif, GetPodcastNotif, GetVideoNotifPaginate, GetPodcastNotifPaginate, GetNotifLength
    ]
})
export class UserModule { }
