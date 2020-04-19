import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


}
