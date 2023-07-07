import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdzagCaseStudyComponent } from './edzag-case-study.component';

describe('EdzagCaseStudyComponent', () => {
  let component: EdzagCaseStudyComponent;
  let fixture: ComponentFixture<EdzagCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdzagCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdzagCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
