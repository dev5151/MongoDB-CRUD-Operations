import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';


import {Employee} from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee;
  employees:Employee[];
  constructor() { }
}
