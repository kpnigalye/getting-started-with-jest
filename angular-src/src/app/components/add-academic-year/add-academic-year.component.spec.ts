import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicYearComponent } from './add-academic-year.component';

describe('AddAcademicYearComponent', () => {
  let component: AddAcademicYearComponent;
  let fixture: ComponentFixture<AddAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
