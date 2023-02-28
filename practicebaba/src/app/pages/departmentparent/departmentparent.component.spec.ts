import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentparentComponent } from './departmentparent.component';

describe('DepartmentparentComponent', () => {
  let component: DepartmentparentComponent;
  let fixture: ComponentFixture<DepartmentparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
