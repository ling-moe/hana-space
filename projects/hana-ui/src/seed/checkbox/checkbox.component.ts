import {EventEmitter, HostListener} from '@angular/core';
import {ChangeDetectorRef, Component, ElementRef, forwardRef, Input, OnInit, Output, Renderer2, TemplateRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'label[hana-checkbox]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  @Input()
  checked = false;

  @Input()
  disabled = false;

  @Input()
  checkedIcon: TemplateRef<HTMLElement>;

  @Input()
  unCheckedIcon: TemplateRef<HTMLElement>;

  @Output() readonly nzCheckedChange = new EventEmitter<boolean>();

  onChange: (checked: boolean) => {};
  onTouch: () => {};

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private render: Renderer2
  ) { }

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    const checkBoxClass = ['hana-checkbox'];
    if (this.checked){
      checkBoxClass.push('hana-checkbox-checked');
    }
    if (this.disabled){
      checkBoxClass.push('hana-checkbox-disabled');
    }
    this.render.setAttribute(this.el, 'class', checkBoxClass.join(' '));
  }


  @HostListener('click')
  hostClick(e: MouseEvent): void {
    e.preventDefault();
    this.innerCheckedChange(!this.checked);
  }

  innerCheckedChange(checked: boolean): void {
    if (!this.disabled) {
      this.checked = checked;
      this.onChange(this.checked);
      this.nzCheckedChange.emit(this.checked);
    }
  }
}
