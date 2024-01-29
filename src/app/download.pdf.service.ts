import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from './app.constants';


@Injectable({
    providedIn: 'root'
})
export class DownloadPdfService {

    constructor(private http: HttpClient) { }

    ngOnInit() {

    }

    downloadPdf(src: string) {
        const pdfUrl = src // Replace with your PDF URL
        this.download(pdfUrl).subscribe(
            (blob: Blob) => {
                const downloadLink = document.createElement('a');
                const url = window.URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.download = AppConstants.PDF_FILE_NAME; // Specify the file name for download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            },
            error => {
                console.error('Error downloading PDF:', error);
            }
        );
    }

    download(url: string): Observable<Blob> {
        return this.http.get(url, { responseType: 'blob' });
    }

}
