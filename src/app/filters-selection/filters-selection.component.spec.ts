import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSelectionComponent } from './filters-selection.component';

describe('FiltersComponent', () => {
  let component: FiltersSelectionComponent;
  let fixture: ComponentFixture<FiltersSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
