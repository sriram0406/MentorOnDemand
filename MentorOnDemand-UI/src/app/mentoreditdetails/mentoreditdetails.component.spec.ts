import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoreditdetailsComponent } from './mentoreditdetails.component';

describe('MentoreditdetailsComponent', () => {
  let component: MentoreditdetailsComponent;
  let fixture: ComponentFixture<MentoreditdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoreditdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoreditdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
