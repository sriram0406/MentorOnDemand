import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatecourseComponent } from './adminupdatecourse.component';

describe('AdminupdatecourseComponent', () => {
  let component: AdminupdatecourseComponent;
  let fixture: ComponentFixture<AdminupdatecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
