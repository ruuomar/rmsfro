import { NewlySubmitionComponent } from './pages/newly-submition/newly-submition.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
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
import { CommentComponent } from './page/comment/comment.component';
import { AllocatedComponent } from './pages/allocated/allocated.component';
import { StdDashbordComponent } from './page/std-dashbord/std-dashbord.component';
import { DocumentComponent } from './pages/document/document.component';
import { AllocationExaminerComponent } from './pages/allocation-examiner/allocation-examiner.component';
import { ListAllocationExaminerComponent } from './pages/list-allocation-examiner/list-allocation-examiner.component';
import { DashbodExaminerComponent } from './page/dashbod-examiner/dashbod-examiner.component';
import { ViewSupervisorComponent } from './pages/view-supervisor/view-supervisor.component';

const routes: Routes = [{
  path: '',component: MainLayoutComponent,
  canActivate:[authGuardGuard],
  children: [
    {path: 'Dashboard', component:DashboadComponent},
    {path: 'Dashboard/newlySubmition', component:NewlySubmitionComponent},
    {path: 'dashboadAdmin', component:DashboardAdminComponent},
    {path: 'AllocationList',component:AllocatonListComponent},
    {path: 'allocationForm',component:AllocationExaminerComponent},
    {path: 'allocaionExaminer',component:ListAllocationExaminerComponent},
    {path: 'examinerDasbord',component:DashbodExaminerComponent},
    {path: 'adduser',component:AddUserComponent},
    {path: 'listUser',component:ListUserComponent},
    {path: 'edituser/:userID',component:EdituserComponent},
    {path: 'listUser/:userID',component:ListUserComponent},
    {path: 'result',component:ResultComponent},
    {path: 'submition',component:SubmitionComponent},
    {path: 'mysubmition',component:MySubmitionComponent},
    {path: 'comment',component:CommentComponent},
    {path: 'allocation',component:AllocatedComponent},
    {path: 'stdDashboad', component:StdDashbordComponent},
    {path: 'student',component:StudentDashboadComponent},
    {path: 'view',component:ViewStudentComponent},
    {path: 'viewSupervisor', component:ViewSupervisorComponent},
    {path: 'studentDashboard', component:StudentDashboadComponent},
    {path: 'document', component:DocumentComponent},
  ]
},
{path: 'login/registration', component:RegComponent},
{path: 'login', component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
