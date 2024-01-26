import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfilepageComponent } from "./components/pages/profilepage/profilepage.component";
import { ProjectsComponent } from "./components/pages/projects/projects.component";
import { ResumeComponent } from "./components/pages/resume/resume.component";




const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: DashboardComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "project", component: ProjectsComponent },
  { path: "resume", component: ResumeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule { }
