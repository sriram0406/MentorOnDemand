import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmineditcourseComponent } from './admineditcourse/admineditcourse.component';
import { AdminupdatecourseComponent } from './adminupdatecourse/adminupdatecourse.component';
import { AdminaddcourseComponent } from './adminaddcourse/adminaddcourse.component';
import { MentorupdatedetailsComponent } from './mentorupdatedetails/mentorupdatedetails.component';
import { MentoreditdetailsComponent } from './mentoreditdetails/mentoreditdetails.component';
import { MentoradddetailsComponent } from './mentoradddetails/mentoradddetails.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';
import { SearchmentorComponent } from './searchmentor/searchmentor.component';
import { LogoutComponent } from './logout/logout.component';
import { MentorblockunblockComponent } from './mentorblockunblock/mentorblockunblock.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { RequestmentorComponent } from './requestmentor/requestmentor.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { StudentviewrequestsComponent } from './studentviewrequests/studentviewrequests.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'mentorlogin', component: MentorloginComponent },
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'trainerprofile', component: TrainerProfileComponent },
    { path: 'userdashboard', component: UserdashboardComponent },
    { path: 'mentorsignup', component: MentorsignupComponent },
    { path: 'mentordashboard', component: MentordashboardComponent },
    { path: 'admindashboard', component: AdmindashboardComponent },
    { path: 'admineditcourse', component: AdmineditcourseComponent },
    { path: 'adminaddcourse', component: AdminaddcourseComponent },
    { path: 'adminupdatecourse/:id', component: AdminupdatecourseComponent, pathMatch: 'full' },
    { path: 'mentorupdatedetails/:id', component: MentorupdatedetailsComponent, pathMatch: 'full' },
    { path: 'mentoreditdetails', component: MentoreditdetailsComponent },
    { path: 'mentoradddetails', component: MentoradddetailsComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'search', component: SearchComponent },
    { path: 'searchmentor', component: SearchmentorComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'mentorblockunblock', component: MentorblockunblockComponent },
    { path: 'studentdashboard', component: StudentdashboardComponent },
    { path: 'requestmentor/:id', component: RequestmentorComponent, pathMatch: 'full' },
    { path: 'viewrequests', component: ViewrequestsComponent },
    { path: 'studentviewrequests', component: StudentviewrequestsComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
