import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LandingPageComponent } from './LandingPage/LandingPage/LandingPage.component';
import { ResumePageComponent } from './ResumePage/resumePage/resumePage.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'landingpage', component: LandingPageComponent},
    {path: 'resumepage', component: ResumePageComponent},
];
