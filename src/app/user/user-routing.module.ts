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
import { AddVideoComponent } from './add-video/add-video.component';
import { AddPodcastComponent } from './add-podcast/add-podcast.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
const UserRoutes: Routes = [
    {
        path:'',
        component:LandingComponent
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
                component:NotificationComponent
            },
            {
                path:'profile',
                component:ProfileComponent
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'subscription',
                component:SubscriptionComponent
            },
            {
                path:'video/:id',
                component:VideoDetailsComponent
            },
            {
                path:'podcast/:id',
                component:AudiodetailsComponent
            },
            {
                path:'addvideo',
                component:AddVideoComponent
            },
            {
                path:'addpodcast',
                component:AddPodcastComponent
            },
            {
                path:'addchannel',
                component:AddChannelComponent
            },
            {
                path:'channel/:id',
                component:ChannelDetailsComponent
            }
        ]
    }
]
    
  
  export const UserRouter = RouterModule.forChild(UserRoutes);