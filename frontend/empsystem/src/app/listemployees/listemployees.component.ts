import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
@Component({
  selector: "app-listemployees",
  templateUrl: "./listemployees.component.html",
  styleUrls: ["./listemployees.component.css"],
})
export class ListemployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }
}
