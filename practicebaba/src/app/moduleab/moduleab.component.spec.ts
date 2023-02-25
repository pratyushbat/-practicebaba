import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleabComponent } from './moduleab.component';

describe('ModuleabComponent', () => {
  let component: ModuleabComponent;
  let fixture: ComponentFixture<ModuleabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
