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
            }
        ]
    }
]
    
  
  export const UserRouter = RouterModule.forChild(UserRoutes);