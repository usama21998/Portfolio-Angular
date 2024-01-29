import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
import noUiSlider from "nouislider";
import { AppConstants } from "src/app/app.constants";
import { LoaderService } from "src/app/loader.service";
import { filter } from 'rxjs/operators';
import { DownloadPdfService } from "src/app/download.pdf.service";
const pdfSrc = AppConstants.PDF_SRC;

@Component({
  selector: "app-index",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  isCollapsed = true
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor(private loader: LoaderService, private router: Router, private activatedRoute: ActivatedRoute, private pdfSrc: DownloadPdfService) {
    this.loader.start();
  }

  ngOnInit() {

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    this.loader.stop();
  }

  onClickDownload() {
    this.pdfSrc.downloadPdf(pdfSrc)
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");

  }
}
