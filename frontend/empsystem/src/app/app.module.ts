import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListemployeesComponent } from "./listemployees/listemployees.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { FormsModule } from "@angular/forms";
import { WelcomeComponent } from "./welcome/welcome.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    WelcomeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
