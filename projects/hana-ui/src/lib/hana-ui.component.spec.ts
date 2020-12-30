import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanaUiComponent } from './hana-ui.component';

describe('HanaUiComponent', () => {
  let component: HanaUiComponent;
  let fixture: ComponentFixture<HanaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanaUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HanaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
