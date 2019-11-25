import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { HeaderComponent } from './header/header.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule } from '@angular/forms';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmineditcourseComponent } from './admineditcourse/admineditcourse.component';
import { AdminupdatecourseComponent } from './adminupdatecourse/adminupdatecourse.component';
import { AdminaddcourseComponent } from './adminaddcourse/adminaddcourse.component';
import { MentorupdatedetailsComponent } from './mentorupdatedetails/mentorupdatedetails.component';
import { MentoradddetailsComponent } from './mentoradddetails/mentoradddetails.component';
import { MentoreditdetailsComponent } from './mentoreditdetails/mentoreditdetails.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';
import { SearchmentorComponent } from './searchmentor/searchmentor.component';
import { LogoutComponent } from './logout/logout.component';
import { MentorblockunblockComponent } from './mentorblockunblock/mentorblockunblock.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { RequestmentorComponent } from './requestmentor/requestmentor.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { StudentviewrequestsComponent } from './studentviewrequests/studentviewrequests.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    TrainerProfileComponent,
    HeaderComponent,
    MentorloginComponent,
    AdminloginComponent,
    UserdashboardComponent,
    MentordashboardComponent,
    MentorsignupComponent,
    AdmindashboardComponent,
    AdmineditcourseComponent,
    AdminupdatecourseComponent,
    AdminaddcourseComponent,
    MentorupdatedetailsComponent,
    MentoradddetailsComponent,
    MentoreditdetailsComponent,
    CoursesComponent,
    SearchComponent,
    SearchmentorComponent,
    LogoutComponent,
    MentorblockunblockComponent,
    StudentdashboardComponent,
    RequestmentorComponent,
    ViewrequestsComponent,
    StudentviewrequestsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
