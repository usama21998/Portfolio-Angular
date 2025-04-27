import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { AppConstants } from "src/app/app.constants";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html"
})
export class NavBarComponent implements OnInit, OnDestroy {
  isCollapsed = AppConstants.isCollapsed;
  email: string = AppConstants.EMAIL;
  youtube: string = AppConstants.YOUTUBE;
  linkedIn: string = AppConstants.LINKEDIN;
  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
