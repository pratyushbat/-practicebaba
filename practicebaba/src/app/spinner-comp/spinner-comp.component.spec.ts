import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCompComponent } from './spinner-comp.component';

describe('SpinnerCompComponent', () => {
  let component: SpinnerCompComponent;
  let fixture: ComponentFixture<SpinnerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
