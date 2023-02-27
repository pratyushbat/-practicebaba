import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstuserchildComponent } from './firstuserchild.component';

describe('FirstuserchildComponent', () => {
  let component: FirstuserchildComponent;
  let fixture: ComponentFixture<FirstuserchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstuserchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstuserchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
