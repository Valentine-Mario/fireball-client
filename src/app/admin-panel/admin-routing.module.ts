import { Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard'
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { PodcastComponent } from './components/podcast/podcast.component'
import { LoginComponent } from './components/login/login.component'
import {GetAdminProfile} from './resolvers/admin.resolvers'
import { HeaderComponent } from './components/header/header.component';

export const AdminRoutes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'action',
        canActivate:[AuthGuard],
        resolve:{admin:GetAdminProfile},
        component:HeaderComponent,
        children:[
            {
                path:'user',
                component:HomeComponent
            },
            {
                path:'video-list',
                component:VideoComponent
            },
            {
                path:'podcast-list',
                component:PodcastComponent
            }
        ]
    }
    
]