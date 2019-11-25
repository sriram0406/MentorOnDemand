import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmentorComponent } from './requestmentor.component';

describe('RequestmentorComponent', () => {
  let component: RequestmentorComponent;
  let fixture: ComponentFixture<RequestmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
