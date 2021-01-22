import {Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'hana-container',
  templateUrl: './container.component.html',
  styleUrls: ['../date-picker/date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  /** A property to control whether the dialog will be visible. */
  @Input()
  show: boolean;
  /** If this property is true, a button for clearing will be added. */
  @Input()
  withClear: boolean;
  @Input()
  confirmName: string;
  @Input()
  cancelName: string;
  @Input()
  clearName: string;
  /** Callback for confirming. */
  @Output()
  handleConfirm = new EventEmitter<void>();
  /** Callback for canceling. */
  @Output()
  handleCancel = new EventEmitter<void>();
  /** Callback for clearing. */
  @Output()
  handleClear = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

}
