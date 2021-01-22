import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'hana-container',
  templateUrl: './container.component.html',
  styleUrls: ['../date-picker/date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  /** A property to control whether the dialog will be visible. */
  show: boolean;
  /** If this property is true, a button for clearing will be added. */
  withClear: boolean;
  /** Callback for confirming. */
  handleConfirm: () => void;
  /** Callback for canceling. */
  handleCancel: () => void;
  /** Callback for clearing. */
  handleClear: () => void;
  confirmName: string;
  cancelName: string;
  clearName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
