import { NewlySubmitionComponent } from './pages/newly-submition/newly-submition.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TittleuplodComponent } from './page/tittleuplod/tittleuplod.component';
import { DetailTittleComponent } from './pages/detail-tittle/detail-tittle.component';
import { TableTittleComponent } from './pages/table-tittle/table-tittle.component';
import { authGuardGuard } from './services/auth-guard.guard';
import { RegComponent } from './pages/reg/reg.component';
import { StudentDashboadComponent } from './page/student-dashboad/student-dashboad.component';
import { DashboardAdminComponent } from './page/dashboard-admin/dashboard-admin.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AllocatonListComponent } from './pages/allocaton-list/allocaton-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ResultComponent } from './page/result/result.component';
import { MySubmitionComponent } from './page/my-submition/my-submition.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { SubmitionComponent } from './page/submition/submition.component';
import { InternalExaminerComponent } from './pages/internal-examiner/internal-examiner.component';
import { ViewStudentComponent } from './page/view-student/view-student.component';

const routes: Routes = [{
  path: '',component: MainLayoutComponent,
  canActivate:[authGuardGuard],
  children: [
    {path: 'Dashboard', component:DashboadComponent},
    {path: 'Dashboard/newlySubmition', component:NewlySubmitionComponent},
    {path: 'studentDashboard', component:StudentDashboadComponent},
    {path: 'tittleuplod',component:TittleuplodComponent},
    {path: 'tabletittle', component:TableTittleComponent},
    {path: 'detailtittle', component:DetailTittleComponent},
    {path: 'dashboadAdmin', component:DashboardAdminComponent},
    {path: 'listUser',component:ListUserComponent},
    {path: 'AllocationList',component:AllocatonListComponent},
    {path: 'student',component:StudentDashboadComponent},
    {path: 'adduser',component:AddUserComponent},
    {path: 'result',component:ResultComponent},
    {path: 'submition',component:SubmitionComponent},
    {path: 'mysubmition',component:MySubmitionComponent},
    {path: 'edituser/:userID',component:EdituserComponent},
    {path:  'listUser/:userID',component:ListUserComponent},
    {path: 'view',component:ViewStudentComponent},

  ]
},
{path: 'registration', component:RegComponent},
{path: 'login', component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
