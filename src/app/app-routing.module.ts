import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'adminpanel',
    loadChildren:()=>import('./admin-panel/admin-panel.module').then(n=>n.AdminPanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
