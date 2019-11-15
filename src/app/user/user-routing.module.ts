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



const UserRoutes: Routes = [
    {
        path:'',
        component:LandingComponent,
        resolve:{info:GetLengthOfUsersVideosPodcast, channels:GetNewChannels}
    },
    {
        path:'user',
        component:HomeComponent,
        children:[
            {
                path:'channel',
                component:ChannelComponent,
                resolve:{channel:GetNewChannelsPage1}
            },
            {
                path:'channel/:id',
                component:ChannelPaginateComponent,
                resolve:{channel:GetNewChannelsPageOther}
            },
            {
                path:'channel-video',
                component:ChannelVideoPageComponent,
                resolve:{channel:GetVideoChannelPage1}
            },
            {
                path:'channel-video/:id',
                component:ChannelVideoPagePaginateComponent,
                resolve:{channel:GetVideoChannelPageOther}
            },
            {
                path:'channel-podcast',
                component:ChannelPodcastPageComponent,
                resolve:{channel:GetPodcastChannelPage1}
            },
            {
                path:'channel-podcast/:id',
                component:ChannelPodcastPagePaginateComponent,
                resolve:{channel:GetPodcastChannelPageOther}
            },
            {
                path:'channel-search/:id',
                component:ChannelSearchComponent,
                resolve:{channel:SearchChannel}
            },
            {
                path:'channel-search/:id/:id2',
                component:ChannelSearchPaginateComponent,
                resolve:{channel:SearchChannelPageOther}
            },
            {
                path:'video',
                component:VideoComponent
            },
            {
                path:'podcast',
                component:PodcastComponent
            },
            {
                path:'notification',
                component:NotificationComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'profile',
                component:ProfileComponent,
                canActivate:[AuthGuard],
                resolve:{user:GetUserProfile, channel:GetMyChannel}
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'subscription',
                component:SubscriptionComponent,
                canActivate:[AuthGuard],
                resolve:{sub:getSubscriptionPage1}
            },
            {
                path:'subscription/:id',
                component:SubscriptionPaginateComponent,
                canActivate:[AuthGuard],
                resolve:{sub:getSubscriptionPageOther}
            },
            {
                path:'video-item/:id',
                component:VideoDetailsComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'podcast-item/:id',
                component:AudiodetailsComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'channel-item/:id',
                component:ChannelDetailsComponent,
                resolve:{channel:GetChannelBYToken, user:GetUserProfile, sub:CheckIfUserIsSubscribed},
                children:[
                { path:'video/:id2',
                    component:ChannelVideoComponent,
                    canActivate:[AuthGuard]
                },
                {
                    path:'podcast/:id2',
                    component:ChannelPodcastComponent,
                    canActivate:[AuthGuard]
                }
                ]
            },
            {
                path:'addcontent',
                component:CreateCteContentComponent,
                resolve:{podcast:GetMyPodcast, video:GetMyVideos},
                canActivate:[AuthGuard]
            },
            {
                path:'profile/settings',
                component:SettingComponent,
                canActivate:[AuthGuard],
                resolve:{user:GetUserProfile}
            },
            {
                path:'videohistory',
                component:VidHistoryComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'podcasthistory',
                component:PodHistoryComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'videobookmark',
                component:VidBookmarkComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'podcastbookmark',
                component:PodBookmarkComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'profile/:id',
                component:ProfileIdComponent,
                resolve:{user:GetUserById, user2:GetUserProfile, channel:GetChannelOfUser}
            }
        ]
    }
]
    
  
  export const UserRouter = RouterModule.forChild(UserRoutes);