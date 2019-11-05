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
import {GetLengthOfUsersVideosPodcast} from './resolvers/user.resolvers'
import {GetNewChannels, GetMyPodcast, GetMyVideos} from './resolvers/channel.resolvers'
import {AuthGuard} from './guard/auth.guard'


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
                component:ChannelComponent
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
                canActivate:[AuthGuard]
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'subscription',
                component:SubscriptionComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'video/:id',
                component:VideoDetailsComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'podcast/:id',
                component:AudiodetailsComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'channel/:id',
                component:ChannelDetailsComponent,
                children:[
                { path:'video/:id',
                    component:ChannelVideoComponent,
                    canActivate:[AuthGuard]
                },
                {
                    path:'podcast/:id',
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
                canActivate:[AuthGuard]
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
                component:ProfileIdComponent
            }
        ]
    }
]
    
  
  export const UserRouter = RouterModule.forChild(UserRoutes);