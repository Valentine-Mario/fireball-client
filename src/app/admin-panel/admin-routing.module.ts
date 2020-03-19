import { Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard'
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { PodcastComponent } from './components/podcast/podcast.component'
import { LoginComponent } from './components/login/login.component'
import {GetAdminProfile} from './resolvers/admin.resolvers'
import { HeaderComponent } from './components/header/header.component';
import {GetUserList, GetUserListPaginate, SearchUser, SearchUserPaginate} from './resolvers/user.resolvers';
import { UserPaginateComponent } from './components/user-paginate/user-paginate.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserSearchPginateComponent } from './components/user-search-pginate/user-search-pginate.component'

import { VideoPaginateComponent } from './components/video-paginate/video-paginate.component';
import { PodcastPaginateComponent } from './components/podcast-paginate/podcast-paginate.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { VideoSearchPaginateComponent } from './components/video-search-paginate/video-search-paginate.component';
import { PodcastSearchPaginateComponent } from './components/podcast-search-paginate/podcast-search-paginate.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import {PodcastSearchComponent} from './components/podcast-search/podcast-search.component'
import {VideoByToken, GetNewVideo, GetNewVideoPaginate, SearchVideo, SearchVideoPaginate} from './resolvers/video.resolvers';
import {PodcastByToken, GetNewPodcast, GetNewPodcastPaginate, SearchPodcastPaginate, SearchPodcast} from './resolvers/podcast.resolvers';

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
                component:HomeComponent,
                resolve:{users:GetUserList}
            },
            {
                path:'user/:id',
                component:UserPaginateComponent,
                resolve:{users:GetUserListPaginate}
            },
            {
                path:'user-search/:id',
                component:UserSearchComponent,
                resolve:{users:SearchUser}
            },
            {
                path:'user-search/:id/:id2',
                component:UserSearchPginateComponent,
                resolve:{users:SearchUserPaginate}
            },
            {
                path:'video-list',
                component:VideoComponent,
                resolve:{videos:GetNewVideo}
            },
            {
                path:'video-list/:id',
                component:VideoPaginateComponent,
                resolve:{videos:GetNewVideoPaginate}
            },
            {
                path:'video/:id',
                component:VideoDetailsComponent,
                resolve:{video:VideoByToken}
            },
            {
                path:'video-list/search/:id',
                component:VideoSearchComponent,
                resolve:{videos:SearchVideo}
            },
            {
                path:'video-list/search/:id/:id2',
                component:VideoSearchPaginateComponent,
                resolve:{videos:SearchVideoPaginate}
            },
            {
                path:'podcast-list',
                component:PodcastComponent,
                resolve:{podcast:GetNewPodcast}
            },
            {
                path:'podcast-list/:id',
                component:PodcastPaginateComponent,
                resolve:{podcast:GetNewPodcastPaginate}
            },
            {
                path:'podcast/:id',
                component:PodcastDetailsComponent,
                resolve:{podcast:PodcastByToken}
            },
            {
                path:'podcast-list/search/:id',
                component:PodcastSearchComponent,
                resolve:{podcast:SearchPodcast}
            },
            {
                path:'podcast-list/search/:id/:id2',
                component:PodcastSearchPaginateComponent,
                resolve:{podcast:SearchPodcastPaginate}
            }
        ]
    }
    
]