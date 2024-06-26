import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleManagementComponent } from './role-management/role-management.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"dashboard",component:DashboardComponent,
    children:[
      
      { path: 'users', component: UserlistComponent },
  { path: 'role', component:RoleManagementComponent },
    ]

  },
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
