import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChannelComponent } from './channel/channel.component';
import { PodcastComponent } from './podcast/podcast.component';
import { VideoComponent } from './video/video.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'
import { LandingComponent } from './landing/landing.component'
import { SubscriptionComponent } from './subscription/subscription.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AudiodetailsComponent } from './audiodetails/audiodetails.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { CreateCteContentComponent } from './create-cte-content/create-cte-content.component';
import { ChannelVideoComponent } from './channel-video/channel-video.component';
import { ChannelPodcastComponent } from './channel-podcast/channel-podcast.component';
import { SettingComponent } from './setting/setting.component';
import { VidHistoryComponent } from './vid-history/vid-history.component';
import { PodHistoryComponent } from './pod-history/pod-history.component';
import { VidBookmarkComponent } from './vid-bookmark/vid-bookmark.component';
import { PodBookmarkComponent } from './pod-bookmark/pod-bookmark.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';
import {GetLengthOfUsersVideosPodcast, GetUserProfile, GetUserById} from './resolvers/user.resolvers'
import {GetNewChannels, GetMyPodcast, GetMyVideos, GetVideoChannelPage1, GetVideoChannelPageOther, GetPodcastChannelPage1, GetPodcastChannelPageOther,
    GetNewChannelsPage1, GetNewChannelsPageOther, SearchChannel, SearchChannelPageOther,
    GetMyChannel, GetChannelOfUser, GetChannelBYToken} from './resolvers/channel.resolvers'
import {AuthGuard} from './guard/auth.guard'
import { ChannelPaginateComponent } from './channel-paginate/channel-paginate.component';
import { ChannelVideoPageComponent } from './channel-video-page/channel-video-page.component';
import { ChannelVideoPagePaginateComponent } from './channel-video-page-paginate/channel-video-page-paginate.component';
import { ChannelPodcastPageComponent } from './channel-podcast-page/channel-podcast-page.component';
import { ChannelPodcastPagePaginateComponent } from './channel-podcast-page-paginate/channel-podcast-page-paginate.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';
import { ChannelSearchPaginateComponent } from './channel-search-paginate/channel-search-paginate.component';
import {getSubscriptionPage1, getSubscriptionPageOther, CheckIfUserIsSubscribed} from './resolvers/subscription.resolvers'
import { SubscriptionPaginateComponent } from './subscription-paginate/subscription-paginate.component'
import { VideoPagpaginateComponent } from './video-pagpaginate/video-pagpaginate.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { VideoSearchPaginateComponent } from './video-search-paginate/video-search-paginate.component';
import {GetNewVideo,CheckVideoBookmark, GetNewVideoPaginate, GetVideoFeed, VideoByToken2, CheckVideoBookmark2,
    GetVideoFeedPaginate, SearchVideo, SearchVideoPaginate, VideoByToken, MostViewed, 
    GetVideoBookMark, GetVideoBookMarkPginate, GetVideoHistory, GetVideoHistoryPaginate} from './resolvers/video.resolvers'
import {CheckPodcastBookmark2, PodcastByToken2, CheckPodcastBookmark, PodcastByToken, MostListens, 
        SearchPodcastPaginate, SearchPodcast, GetPodcastFeedPaginate, GetPodcastFeed, GetNewPodcastPaginate,
         GetNewPodcast, GetPodcastBookMark,  GetPodcastBookMarkPaginate, GetPodcastHistory, GetPodcastHistoryPaginate} from './resolvers/podcast.resolvers'
import { PodcastPaginateComponent } from './podcast-paginate/podcast-paginate.component';
import { PodcastSearchComponent } from './podcast-search/podcast-search.component';
import { PodcastSearchPaginateComponent } from './podcast-search-paginate/podcast-search-paginate.component'     
import { PodBookmarkPaginateComponent } from './pod-bookmark-paginate/pod-bookmark-paginate.component';
import { PodHistoryPaginateComponent } from './pod-history-paginate/pod-history-paginate.component';
import { VidBookmarkPaginateComponent } from './vid-bookmark-paginate/vid-bookmark-paginate.component';
import { VidHistoryPaginateComponent } from './vid-history-paginate/vid-history-paginate.component'
import {GetVideoComment, GetPodcastComment} from './resolvers/comment.resolvers'
import { NotificationPaginateComponent } from './notification-paginate/notification-paginate.component'
import {GetVideoNotif, GetPodcastNotif, GetNotifLength, GetVideoNotifPaginate, GetPodcastNotifPaginate} from './resolvers/notification.resolvers'
import { HeaderComponent } from './header/header.component';

export const UserRoutes: Routes = [
    {
        path:'',
        component:LandingComponent,
        resolve:{info:GetLengthOfUsersVideosPodcast, channels:GetNewChannels, length:GetNotifLength}
    },
    {   
        path:'head',
        component:HeaderComponent,
        resolve:{length:GetNotifLength}
    },
    {
        path:'user',
        component:HomeComponent,
        children:[
            {
                path:'channel',
                component:ChannelComponent,
                resolve:{channel:GetNewChannelsPage1, length:GetNotifLength}
            },
            {
                path:'channel/:id',
                component:ChannelPaginateComponent,
                resolve:{channel:GetNewChannelsPageOther, length:GetNotifLength}
            },
            {
                path:'channel-video',
                component:ChannelVideoPageComponent,
                resolve:{channel:GetVideoChannelPage1, length:GetNotifLength}
            },
            {
                path:'channel-video/:id',
                component:ChannelVideoPagePaginateComponent,
                resolve:{channel:GetVideoChannelPageOther, length:GetNotifLength}
            },
            {
                path:'channel-podcast',
                component:ChannelPodcastPageComponent,
                resolve:{channel:GetPodcastChannelPage1, length:GetNotifLength}
            },
            {
                path:'channel-podcast/:id',
                component:ChannelPodcastPagePaginateComponent,
                resolve:{channel:GetPodcastChannelPageOther, length:GetNotifLength}
            },
            {
                path:'channel-search/:id',
                component:ChannelSearchComponent,
                resolve:{channel:SearchChannel, length:GetNotifLength}
            },
            {
                path:'channel-search/:id/:id2',
                component:ChannelSearchPaginateComponent,
                resolve:{channel:SearchChannelPageOther, length:GetNotifLength}
            },
            {
                path:'video',
                component:VideoComponent,
                resolve:{new_video:GetNewVideo, feed_video:GetVideoFeed, most_viewed:MostViewed, length:GetNotifLength}
            },
            {
                path:'video/:id',
                component:VideoPagpaginateComponent,
                resolve:{new_video:GetNewVideoPaginate, feed_video:GetVideoFeedPaginate, length:GetNotifLength}
            },
            {
                path:'video-search/:id',
                component:VideoSearchComponent,
                resolve:{video:SearchVideo, length:GetNotifLength}
            },
            {
                path:'video-search/:id/:id2',
                component:VideoSearchPaginateComponent,
                resolve:{video: SearchVideoPaginate, length:GetNotifLength}
            },
            {
                path:'podcast',
                component:PodcastComponent,
                resolve:{podcast:GetNewPodcast, feed:GetPodcastFeed, most_listens:MostListens, length:GetNotifLength}
            },
            {
                path:'podcast/:id',
                component:PodcastPaginateComponent,
                resolve:{podcast:GetNewPodcastPaginate, feed:GetPodcastFeedPaginate, length:GetNotifLength}
            },
            {
                path:'podcast-search/:id',
                component:PodcastSearchComponent,
                resolve:{podcast:SearchPodcast, length:GetNotifLength}
            },
            {
                path:'podcast-search/:id/:id2',
                component:PodcastSearchPaginateComponent,
                resolve:{podcast:SearchPodcastPaginate, length:GetNotifLength}
            },
            {
                path:'notification',
                component:NotificationComponent,
                canActivate:[AuthGuard],
                resolve:{video:GetVideoNotif, podcast:GetPodcastNotif, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'notification/:id',
                component:NotificationPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{video:GetVideoNotifPaginate, podcast:GetPodcastNotifPaginate, length:GetNotifLength, user:GetUserProfile}
            },
            {
                path:'profile',
                component:ProfileComponent,
                canActivate:[AuthGuard],
                resolve:{user:GetUserProfile, channel:GetMyChannel, length:GetNotifLength}
            },
            {
                path:'login',
                component:LoginComponent,
                resolve:{length:GetNotifLength}
            },
            {
                path:'subscription',
                component:SubscriptionComponent,
                canActivate:[AuthGuard],
                resolve:{sub:getSubscriptionPage1, length:GetNotifLength}
            },
            {
                path:'subscription/:id',
                component:SubscriptionPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{sub:getSubscriptionPageOther, length:GetNotifLength}
            },
            {
                path:'video-item/:id2',
                component:VideoDetailsComponent,
                canActivate:[AuthGuard],
                resolve:{video:VideoByToken, length:GetNotifLength, user:GetUserProfile, bookmark:CheckVideoBookmark, comment:GetVideoComment}
            },
            {
                path:'podcast-item/:id2',
                component:AudiodetailsComponent,
                canActivate:[AuthGuard],
                resolve:{podcast:PodcastByToken, length:GetNotifLength, user:GetUserProfile, bookmark:CheckPodcastBookmark, comment:GetPodcastComment}
            },
            {
                path:'channel-item/:id',
                component:ChannelDetailsComponent,
                resolve:{channel:GetChannelBYToken, user:GetUserProfile, sub:CheckIfUserIsSubscribed, length:GetNotifLength},
                children:[
                { path:'video/:id2',
                    component:ChannelVideoComponent,
                    canActivate:[AuthGuard],
                    resolve:{video:VideoByToken2, length:GetNotifLength, user:GetUserProfile, bookmark:CheckVideoBookmark2, comment:GetVideoComment}
                },
                {
                    path:'podcast/:id2',
                    component:ChannelPodcastComponent,
                    canActivate:[AuthGuard],
                    resolve:{podcast:PodcastByToken2, length:GetNotifLength, user:GetUserProfile, bookmark:CheckPodcastBookmark2, comment:GetPodcastComment}
                }
                ]
            },
            {
                path:'addcontent',
                component:CreateCteContentComponent,
                resolve:{podcast:GetMyPodcast, video:GetMyVideos, length:GetNotifLength},
                canActivate:[AuthGuard]
            },
            {
                path:'profile/settings',
                component:SettingComponent,
                canActivate:[AuthGuard],
                resolve:{user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'videohistory',
                component:VidHistoryComponent,
                canActivate:[AuthGuard],
                resolve:{video:GetVideoHistory, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'videohistory/:id',
                component:VidHistoryPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{video:GetVideoHistoryPaginate, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'podcasthistory',
                component:PodHistoryComponent,
                canActivate:[AuthGuard],
                resolve:{podcast:GetPodcastHistory, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'podcasthistory/:id',
                component:PodHistoryPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{podcast:GetPodcastHistoryPaginate,length:GetNotifLength, user:GetUserProfile}
            },
            {
                path:'videobookmark',
                component:VidBookmarkComponent,
                canActivate:[AuthGuard],
                resolve:{video:GetVideoBookMark, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'videobookmark/:id',
                component:VidBookmarkPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{video:GetVideoBookMarkPginate, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'podcastbookmark',
                component:PodBookmarkComponent,
                canActivate:[AuthGuard],
                resolve:{podcast:GetPodcastBookMark, length:GetNotifLength, user:GetUserProfile}
            },
            {
                path:'podcastbookmark/:id',
                component:PodBookmarkPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{podcast:GetPodcastBookMarkPaginate, user:GetUserProfile, length:GetNotifLength}
            },
            {
                path:'profile/:id',
                component:ProfileIdComponent,
                resolve:{user:GetUserById, user2:GetUserProfile, channel:GetChannelOfUser, length:GetNotifLength}
            }
        ]
    }
]