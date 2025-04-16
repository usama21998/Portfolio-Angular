import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { LoaderService } from "src/app/loader.service";
import { filter } from 'rxjs/operators';
@Component({
  selector: "app-projects",
  templateUrl: "projects.component.html"
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private loader: LoaderService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loader.start();
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    this.loader.stop();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
