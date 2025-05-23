import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    constructor(private ngxService: NgxUiLoaderService) { }

    ngOnInit() {

    }
    start() {
        this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
        // Stop the foreground loading after 5s
        // setTimeout(() => {
        //     this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
        // }, 5000);

        // OR
        this.ngxService.startBackground("do-background-things");
        // Do something here...

        this.ngxService.stopBackground("do-background-things");

        this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
        // Stop the foreground loading after 5s
    }

    stop() {
        setTimeout(() => {
            this.ngxService.stop();
            this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        }, 10);
    }
}
