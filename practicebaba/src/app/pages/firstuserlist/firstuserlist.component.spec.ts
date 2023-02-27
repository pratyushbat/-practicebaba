import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstuserlistComponent } from './firstuserlist.component';

describe('FirstuserlistComponent', () => {
  let component: FirstuserlistComponent;
  let fixture: ComponentFixture<FirstuserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstuserlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
