import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMouthComponent } from './year-mouth.component';

describe('YearMouthComponent', () => {
  let component: YearMouthComponent;
  let fixture: ComponentFixture<YearMouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMouthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
