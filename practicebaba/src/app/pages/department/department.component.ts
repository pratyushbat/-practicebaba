import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Department } from '../departmentparent/departmentparent.component';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {
  private _department!: Department;
  @Input()
  get department(): Department {
    return this._department;
  }
  set department(department: Department) {
    this._department = department;
    if (!this._department) {
      return;
    }
    const depIndex = this.records.findIndex(
      (dep) => dep.depId === department.depId
    );
    if (depIndex < 0) {
      this._department.teachers = [];
      this.records.push(this._department);
      this.teacher = '';
    }
  }

  private _teacher: string;

  @Input()
  get teacher(): string {
    return this._teacher;
  }
  set teacher(val: string) {
    this._teacher = val + 'hello';
    if (this._teacher && this._teacher.trim().length) {
      this.department?.teachers?.push(this.teacher);
    }
  }
  records: Department[] = [];
  constructor() {}
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.department && changes.department.currentValue) {
  //     const depIndex = this.records.findIndex(
  //       (dep) => dep.depId === this.department.depId
  //     );
  //     if (depIndex < 0) {
  //       this.department.teachers = [];
  //       this.records.push(this.department);
  //       this.teacher = '';
  //     }
  //   }
  //   if (changes.teacherz) {
  //     if (this.teacher && this.teacher.trim().length) {
  //       this.department.teachers?.push(this.teacher);
  //     }
  //   }
  // }
}
