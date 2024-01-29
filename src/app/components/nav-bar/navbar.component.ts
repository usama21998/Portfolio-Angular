import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { AppConstants } from "src/app/app.constants";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html"
})
export class NavBarComponent implements OnInit, OnDestroy {
  isCollapsed = AppConstants.isCollapsed;
  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
