import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListemployeesComponent } from "./listemployees/listemployees.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { FormsModule } from "@angular/forms";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    WelcomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
