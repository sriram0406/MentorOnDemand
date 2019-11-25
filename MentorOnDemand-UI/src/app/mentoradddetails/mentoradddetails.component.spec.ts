import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoradddetailsComponent } from './mentoradddetails.component';

describe('MentoradddetailsComponent', () => {
  let component: MentoradddetailsComponent;
  let fixture: ComponentFixture<MentoradddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoradddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoradddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
