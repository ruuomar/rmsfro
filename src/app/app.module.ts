import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { LoginComponent } from './pages/login/login.component';
import { NewlySubmitionComponent } from './pages/newly-submition/newly-submition.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { StudentDashboadComponent } from './page/student-dashboad/student-dashboad.component';
import { TittleuplodComponent } from './page/tittleuplod/tittleuplod.component';
import { SubmitionComponent } from './page/submition/submition.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TableTittleComponent } from './pages/table-tittle/table-tittle.component';
import { DetailTittleComponent } from './pages/detail-tittle/detail-tittle.component';
import { InternalExaminerComponent } from './pages/internal-examiner/internal-examiner.component';
import { HttpClientModule } from '@angular/common/http';
import { PGOComponent } from './pages/pgo/pgo.component';
import { RegComponent } from './pages/reg/reg.component';
import { DashboardAdminComponent } from './page/dashboard-admin/dashboard-admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AllocatonListComponent } from './pages/allocaton-list/allocaton-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ResultComponent } from './page/result/result.component';
import { MySubmitionComponent } from './page/my-submition/my-submition.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { ViewStudentComponent } from './page/view-student/view-student.component';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboadComponent,
    LoginComponent,
    NewlySubmitionComponent,
    StudentDashboadComponent,
    TittleuplodComponent,
    SubmitionComponent,
    TableTittleComponent,
    DetailTittleComponent,
    InternalExaminerComponent,
    PGOComponent,
    RegComponent,
    DashboardAdminComponent,
    ListUserComponent,
    AllocatonListComponent,
    AddUserComponent,
    ResultComponent,
    MySubmitionComponent,
    EdituserComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
