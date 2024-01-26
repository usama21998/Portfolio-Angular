import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
const src = 'assets/resume/UsamaAttiqueResume.pdf'

@Component({
  selector: "app-resume",
  templateUrl: "resume.component.html"
})
export class ResumeComponent implements OnDestroy {
  isCollapsed = true;
  pdfSrc: any
  fileNameForDownload = "UsamaAttique-Resume"

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.getPDF();
  }

  getPDF() {
    this.getPdfContent().then((pdfData: ArrayBuffer) => {
      let blob = new Blob([pdfData], { type: 'application/pdf' });
      this.pdfSrc = URL.createObjectURL(blob);
      console.log('PDF Content:', this.pdfSrc);
    }).catch((error) => {
      console.error('Error fetching PDF:', error);
    });
  }

  getPdfContent(): Promise<any> {
    const pdfPath = src;
    return this.http.get(pdfPath, { responseType: 'arraybuffer' }).toPromise();
  }

  ngOnDestroy() {

  }
}
