import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
@Component({
  selector: "app-listemployees",
  templateUrl: "./listemployees.component.html",
  styleUrls: ["./listemployees.component.css"],
})
export class ListemployeesComponent implements OnInit {
  employees: Employee[];

  constructor() {}

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: "Priti",
        lastName: "Solanki",
        emailId: "ps@xyz.com",
      },
      {
        id: 2,
        firstName: "Abhi",
        lastName: "Solanki",
        emailId: "as@xyz.com",
      },
      {
        id: 3,
        firstName: "Aarya",
        lastName: "Solanki",
        emailId: "aas@xyz.com",
      },
    ];
  }
}
