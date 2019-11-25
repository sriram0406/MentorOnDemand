import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorupdatedetailsComponent } from './mentorupdatedetails.component';

describe('MentorupdatedetailsComponent', () => {
  let component: MentorupdatedetailsComponent;
  let fixture: ComponentFixture<MentorupdatedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorupdatedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorupdatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
