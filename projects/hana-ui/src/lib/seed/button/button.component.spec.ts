import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.className = 'test-demo';
    component.size = 'large';
    component.onClick = (e) => {
      console.log('two?');
      return 'click-event-hana';
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.className).toEqual('test-demo');
    expect(component.size).toEqual('large');
    expect(component.onClick(MouseEvent)).toEqual('click-event-hana');
  });
});
