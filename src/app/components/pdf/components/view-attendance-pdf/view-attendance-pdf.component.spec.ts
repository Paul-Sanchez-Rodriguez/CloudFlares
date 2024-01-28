import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendancePDFComponent } from './view-attendance-pdf.component';

describe('ViewAttendancePDFComponent', () => {
  let component: ViewAttendancePDFComponent;
  let fixture: ComponentFixture<ViewAttendancePDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAttendancePDFComponent]
    });
    fixture = TestBed.createComponent(ViewAttendancePDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
