import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ComponentsModule } from "./components/components.module";
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from "ngx-ui-loader";



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "black",
  bgsPosition: "top-right",
  bgsSize: 30,
  bgsType: SPINNER.rectangleBounce, // background spinner type


  fgsType: SPINNER.threeStrings, // foreground spinner type
  fgsSize: 40,
  fgsColor: "#cb405d",
  fgsPosition:"center-center",

  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness
  pbColor:"#cb405d",

};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
