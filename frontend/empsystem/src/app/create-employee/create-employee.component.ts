import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router, ActivatedRoute } from "@angular/router";

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  form: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      emailId: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.log("OnSubmit");
    console.log(this.employee);

    this.saveEmployee();

    this.router.navigate(["welcome"], {
      queryParams: { data: btoa(this.employee.firstName) },
    });
  }
}
