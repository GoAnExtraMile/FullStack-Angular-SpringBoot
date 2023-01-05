import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListemployeesComponent } from "./listemployees/listemployees.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "employees", component: ListemployeesComponent },
  { path: "create-employee", component: CreateEmployeeComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "employees", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
