import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSearchSortComponent } from './char-search-sort.component';

describe('CharSearchSortComponent', () => {
  let component: CharSearchSortComponent;
  let fixture: ComponentFixture<CharSearchSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSearchSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSearchSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
