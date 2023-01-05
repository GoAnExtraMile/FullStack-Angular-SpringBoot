import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      emailId: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log("OnSubmit");
    console.log(this.employee);

    this.router.navigate(["welcome"], {
      queryParams: { data: btoa(this.employee.firstName) },
    });
  }
}
