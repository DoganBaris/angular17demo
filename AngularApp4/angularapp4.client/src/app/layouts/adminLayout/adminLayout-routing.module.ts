import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { OrganizationListComponent } from '../../organization/organizationList/organizationList.component';
// import { UserListComponent } from '../../user/userList/userList.component';
import { SettingsComponent } from '../../settings/settings.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },

  { path: 'dashboard', component: DashboardComponent },
  // { path: 'userList', component: UserListComponent },
  // { path: 'organizationList', component: OrganizationListComponent },
  { path: 'settings', component: SettingsComponent },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule { }
