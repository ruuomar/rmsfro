import { NewlySubmitionComponent } from './pages/newly-submition/newly-submition.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuardGuard } from './services/auth-guard.guard';
import { RegComponent } from './pages/reg/reg.component';
import { DashboardAdminComponent } from './page/dashboard-admin/dashboard-admin.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AllocatonListComponent } from './pages/allocaton-list/allocaton-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ResultComponent } from './page/result/result.component';
import { MySubmitionComponent } from './page/my-submition/my-submition.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { SubmitionComponent } from './page/submition/submition.component';
import { ViewStudentComponent } from './page/view-student/view-student.component';
import { CommentComponent } from './page/comment/comment.component';
import { AllocatedComponent } from './pages/allocated/allocated.component';
import { StdDashbordComponent } from './page/std-dashbord/std-dashbord.component';
import { DocumentComponent } from './pages/document/document.component';
import { AllocationExaminerComponent } from './pages/allocation-examiner/allocation-examiner.component';
import { ListAllocationExaminerComponent } from './pages/list-allocation-examiner/list-allocation-examiner.component';
import { DashbodExaminerComponent } from './page/dashbod-examiner/dashbod-examiner.component';
import { ViewSupervisorComponent } from './pages/view-supervisor/view-supervisor.component';
import { ViewCommentComponent } from './page/view-comment/view-comment.component';
import { DashbordSupervisorComponent } from './page/dashbord-supervisor/dashbord-supervisor.component';
import { PgoDashbordComponent } from './page/pgo-dashbord/pgo-dashbord.component';
import { AllocationAllComponent } from './page/allocation-all/allocation-all.component';
import { ReserchDocumentComponent } from './page/reserch-document/reserch-document.component';
import { AddUserDialogComponent } from './page/add-user-dialog/add-user-dialog.component';
import { OnotherDocumentComponent } from './page/onother-document/onother-document.component';
import { StudentDashboadComponent } from './page/student-dashboad/student-dashboad.component';
import { AddResultComponent } from './page/add-result/add-result.component';

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
    {path: 'comment/:research_id',component:CommentComponent},
    {path: 'allocation',component:AllocatedComponent},
    {path: 'stdDashboad', component:StdDashbordComponent},
    {path: 'student', component:StudentDashboadComponent},
    {path: 'viewCOmment',component:ViewCommentComponent},
    {path: 'view',component:ViewStudentComponent},
    {path: 'viewSupervisor', component:ViewSupervisorComponent},
    {path: 'document', component:DocumentComponent},
    {path: 'superDashbord',component:DashbordSupervisorComponent},
    {path: 'examinerDashbord', component:DashbodExaminerComponent},
    {path: 'pgoDashbord',component:PgoDashbordComponent},
    {path:'allocationAll',component:AllocationAllComponent},
    {path: 'reserchDocument',component:ReserchDocumentComponent},
    {path: 'dialogUserAdd',component:AddUserDialogComponent},
    {path: 'updateDocument/:research_id',component:OnotherDocumentComponent},
    {path: 'completed',component:ReserchDocumentComponent},
    {path: 'addResult/',component:AddResultComponent},
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
