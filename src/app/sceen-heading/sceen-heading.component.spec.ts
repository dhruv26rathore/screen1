import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceenHeadingComponent } from './sceen-heading.component';

describe('SceenHeadingComponent', () => {
  let component: SceenHeadingComponent;
  let fixture: ComponentFixture<SceenHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceenHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceenHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
