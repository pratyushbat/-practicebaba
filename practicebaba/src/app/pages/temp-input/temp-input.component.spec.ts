import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempInputComponent } from './temp-input.component';

describe('TempInputComponent', () => {
  let component: TempInputComponent;
  let fixture: ComponentFixture<TempInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
