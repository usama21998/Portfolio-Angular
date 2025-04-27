import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { AppConstants } from "src/app/app.constants";

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html"
})
export class FooterComponent implements OnInit, OnDestroy {

  email: string = AppConstants.EMAIL;
  youtube: string = AppConstants.YOUTUBE;
  linkedIn: string = AppConstants.LINKEDIN;
  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
