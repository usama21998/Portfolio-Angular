import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfilepageComponent } from "./pages/profilepage/profilepage.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { NavBarComponent } from "./nav-bar/navbar.component";
import { FooterComponent } from "./footer/footer.component";



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    DashboardComponent,
    ProfilepageComponent,
    ProjectsComponent,
    FooterComponent,
    ResumeComponent,
    NavBarComponent
  ],
  exports: [
    DashboardComponent,
    ProfilepageComponent,
    ProjectsComponent,
    FooterComponent,
    ResumeComponent,
    NavBarComponent
  ],
  providers: []
})
export class ComponentsModule { }
