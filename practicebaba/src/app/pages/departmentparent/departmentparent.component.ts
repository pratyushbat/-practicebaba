import { Component } from '@angular/core';
export class Department {
  name!: string;
  depId: number;
  teachers?: string[];
}
@Component({
  selector: 'departmentparent',
  templateUrl: './departmentparent.component.html',
  styleUrls: ['./departmentparent.component.scss'],
})
export class DepartmentparentComponent {
  public selectedDep!: Department;

  constructor() {}

  public departments = [
    { name: 'CSE', depId: 23 },
    { name: 'EEE', depId: 24 },
    { name: 'IT', depId: 25 },
    { name: 'ME', depId: 26 },
  ];

  onDepartmentChange(depIndex: string) {
    this.selectedDep = this.departments[+depIndex];
  }
}
