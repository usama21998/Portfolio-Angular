import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { LoaderService } from "src/app/loader.service";
import { filter } from 'rxjs/operators';
import { AppConstants } from "src/app/app.constants";
@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy, AfterViewInit {

  email: string = AppConstants.EMAIL;
  youtube: string = AppConstants.YOUTUBE;
  linkedIn: string = AppConstants.LINKEDIN;

  constructor(private loader: LoaderService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loader.start();
  }

  currentEmployment = "";
  infotechExperince = "2.5 Years";
  infotechInternship = "3 Months";
  totalExperience = "";

  ngOnInit() {
    this.getCurrentEmploymentMonths();
    this.totalExperience = this.getTotalExperience();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");

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
    body.classList.remove("profile-page");
  }

  getCurrentEmploymentMonths() {
    var startDate = "2024-03-04"; // Format: YYYY-MM-DD
    var endDate: any = new Date();
    endDate = this.formatDate(endDate);// Format: YYYY-MM-DD
    let months = this.findCurrentEmploumentMonths(startDate, endDate);
    let stringMonth = '';
    let stringYear = '';

    months = months + 3;
    if (months > 1) {
      stringMonth = "Months"
    }
    else
      stringMonth = "Month"


    const years = Math.floor(months / 12);
    months = months % 12;

    if (years > 1) {
      stringYear = "Years"
    }
    else
      stringYear = "Year"

    if (years == 0) {
      this.currentEmployment = `${months} ${stringMonth}`
    }
    else {
      if (months == 0) {
        this.currentEmployment = `${years} ${stringYear}`
      }
      else {
        this.currentEmployment = `${years}.${months} Years`
      }
    }
  }

  getTotalExperience() {
    const parseExperience = (str) => {
      if (!str) return 0;
      if (str.toLowerCase().includes("months") || str.toLowerCase().includes("month")) {
        const months = parseFloat(str.match(/[\d.]+/)[0]);
        return months;
      }
      if (str.toLowerCase().includes("years") || str.toLowerCase().includes("year")) {
        const res: any = parseFloat(str.match(/[\d.]+/)[0]);
        if (res.toString().includes(".")) {
          let [year, month] = res.toString().split(".");
          const totalMonths = (Number(year) * 12) + Number(month);
          return totalMonths;
        }
        else {
          return res * 12;
        }
      }
    };

    let total =
      parseExperience(this.infotechExperince) +
      parseExperience(this.infotechInternship) +
      parseExperience(this.currentEmployment);

    const years = Math.floor(total / 12);
    const months = total % 12 / 10;
    return years + months + " Years";
  }

  findCurrentEmploumentMonths(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    var timeDifference = endDate.getTime() - startDate.getTime();
    var monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.4375)); // Approximate number of days in a month
    return monthsDifference;
  }

  formatDate(date) {
    var year = date.getFullYear();

    // Add leading zero if month or day is single digit
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');

    return year + '-' + month + '-' + day;
  }
}
