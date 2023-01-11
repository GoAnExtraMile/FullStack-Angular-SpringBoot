import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"],
})
export class UpdateEmployeeComponent implements OnInit {
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

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (data) => {
        this.goToEmployeeList();
      },
      (err) => console.log(err)
    );
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"]);
  }
}
