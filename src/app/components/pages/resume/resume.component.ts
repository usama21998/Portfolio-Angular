import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { LoaderService } from "src/app/loader.service";
import { filter } from 'rxjs/operators';
import { AppConstants } from "src/app/app.constants";

const src = AppConstants.PDF_SRC;
@Component({
  selector: "app-resume",
  templateUrl: "resume.component.html"
})
export class ResumeComponent implements OnInit, OnDestroy, AfterViewInit {
  pdfSrc: any
  fileNameForDownload = AppConstants.PDF_FILE_NAME;

  constructor(private http: HttpClient, private loader: LoaderService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loader.start();
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }



  ngAfterViewInit(): void {
    this.getPDF();
  }


  getPDF() {
    this.getPdfContent().then((pdfData: ArrayBuffer) => {
      let blob = new Blob([pdfData], { type: 'application/pdf' });
      this.pdfSrc = URL.createObjectURL(blob);
      console.log('PDF Content:', this.pdfSrc);
      this.loader.stop();
    }).catch((error) => {
      console.error('Error fetching PDF:', error);
      this.loader.stop();
    });


  }

  getPdfContent(): Promise<any> {
    const pdfPath = src;
    return this.http.get(pdfPath, { responseType: 'arraybuffer' }).toPromise();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
