import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisepageComponent } from './promisepage.component';

describe('PromisepageComponent', () => {
  let component: PromisepageComponent;
  let fixture: ComponentFixture<PromisepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
