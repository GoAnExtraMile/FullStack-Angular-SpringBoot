import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-employee",
  templateUrl: "./view-employee.component.html",
  styleUrls: ["./view-employee.component.css"],
})
export class ViewEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (err) => console.log(err)
    );
  }
}
