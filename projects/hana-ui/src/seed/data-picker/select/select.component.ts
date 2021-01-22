import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'hana-select',
  templateUrl: './select.component.html',
  styleUrls: ['../date-picker/date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {

  /** Options' values. */
  @Input()
  values: Array<string|number>;
  /** Options' labels. */
  @Input()
  labels: Array<string|number>;
  /** Current option's value. */
  @Input()
  current: string | number;
  /** Callback for date changing. */
  @Input()
  handleChange: (value: string | number) => void;
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(value: string | number): void {
    this.handleChange(value);
    this.open = false;
  }

  handleSwitchOpen(): void {
    this.open = !this.open;
  }

  handleCloseOutside(e: Event): void {
    const {open} = this;
    if (!open) {
      return;
    }
    // const domNode = ReactDOM.findDOMNode(this);
    // if (!domNode || !domNode.contains(e.target)) {
    //   this.open = false;
    // }
  }
}
