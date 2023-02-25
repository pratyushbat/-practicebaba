import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablepageComponent } from './observablepage.component';

describe('ObservablepageComponent', () => {
  let component: ObservablepageComponent;
  let fixture: ComponentFixture<ObservablepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
