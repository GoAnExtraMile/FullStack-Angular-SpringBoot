import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private router: Router) {}

  ngOnInit() {}

  addEmployee(firstName: string) {
    this.router.navigate(["welcome", firstName]);
  }
  onSubmit() {
    console.log(this.employee);
  }
}
