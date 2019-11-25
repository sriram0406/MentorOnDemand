import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewrequestsComponent } from './studentviewrequests.component';

describe('StudentviewrequestsComponent', () => {
  let component: StudentviewrequestsComponent;
  let fixture: ComponentFixture<StudentviewrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentviewrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
