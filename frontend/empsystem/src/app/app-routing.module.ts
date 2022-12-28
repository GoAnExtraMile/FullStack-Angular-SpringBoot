import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListemployeesComponent } from "./listemployees/listemployees.component";

const routes: Routes = [
  { path: "employees", component: ListemployeesComponent },
  { path: "", redirectTo: "employees", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
