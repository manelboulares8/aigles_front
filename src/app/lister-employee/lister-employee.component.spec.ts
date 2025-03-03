import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEmployeeComponent } from './lister-employee.component';

describe('ListerEmployeeComponent', () => {
  let component: ListerEmployeeComponent;
  let fixture: ComponentFixture<ListerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
