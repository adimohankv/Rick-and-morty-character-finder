import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListHolderComponent } from './character-list-holder.component';

describe('CharacterListHolderComponent', () => {
  let component: CharacterListHolderComponent;
  let fixture: ComponentFixture<CharacterListHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
