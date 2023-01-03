import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor() { }

  ngOnInit() {
  }

}
