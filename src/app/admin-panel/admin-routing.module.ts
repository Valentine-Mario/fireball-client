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
                component:VideoComponent
            },
            {
                path:'podcast-list',
                component:PodcastComponent
            }
        ]
    }
    
]