import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-listemployees",
  templateUrl: "./listemployees.component.html",
  styleUrls: ["./listemployees.component.css"],
})
export class ListemployeesComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(["update-employee", id]);
  }

  deleteEmployee(id: number) {
    console.log("Delete Employee Method ");
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }

  viewEmployee(id: number) {
    this.router.navigate(["view-employee", id]);
  }
}
