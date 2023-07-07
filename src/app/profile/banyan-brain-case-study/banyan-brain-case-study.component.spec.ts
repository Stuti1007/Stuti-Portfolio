import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanyanBrainCaseStudyComponent } from './banyan-brain-case-study.component';

describe('BanyanBrainCaseStudyComponent', () => {
  let component: BanyanBrainCaseStudyComponent;
  let fixture: ComponentFixture<BanyanBrainCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanyanBrainCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanyanBrainCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
