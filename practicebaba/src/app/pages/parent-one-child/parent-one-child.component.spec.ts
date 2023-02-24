import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildComponent } from './parent-one-child.component';

describe('ParentOneChildComponent', () => {
  let component: ParentOneChildComponent;
  let fixture: ComponentFixture<ParentOneChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOneChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
