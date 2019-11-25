import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmentorComponent } from './searchmentor.component';

describe('SearchmentorComponent', () => {
  let component: SearchmentorComponent;
  let fixture: ComponentFixture<SearchmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
