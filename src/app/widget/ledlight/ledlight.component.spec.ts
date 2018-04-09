import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedlightComponent } from './ledlight.component';

describe('LedlightComponent', () => {
  let component: LedlightComponent;
  let fixture: ComponentFixture<LedlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
