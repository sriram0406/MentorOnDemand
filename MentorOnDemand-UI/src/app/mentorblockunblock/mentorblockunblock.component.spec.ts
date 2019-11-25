import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorblockunblockComponent } from './mentorblockunblock.component';

describe('MentorblockunblockComponent', () => {
  let component: MentorblockunblockComponent;
  let fixture: ComponentFixture<MentorblockunblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorblockunblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorblockunblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
