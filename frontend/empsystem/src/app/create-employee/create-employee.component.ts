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
  userForm: FormGroup;
  //userForm: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      emailId: ["", Validators.required],
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

  onSubmit(userForm: any) {
    console.log("OnSubmit", userForm);
    console.log(this.employee);

    this.saveEmployee();

    this.router.navigate(["welcome"], {
      queryParams: { data: btoa(this.employee.firstName) },
    });
  }

  onClear() {
    console.log("onClear() Method.");
    this.userForm.reset();
  }

  onCancel() {
    this.router.navigate(["employees"]);
  }
}
