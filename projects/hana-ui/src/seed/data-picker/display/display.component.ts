import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

export type arrayWith7Strings = [
  string,
  string,
  string,
  string,
  string,
  string,
  string
];
export type arrayWith12Strings = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

@Component({
  selector: 'hana-display',
  templateUrl: './display.component.html',
  styleUrls: ['../date-picker/date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {

  /** Current date. */
  @Input()
  date: string & Date | null;
  /** If the next date if before the previous one. */
  @Input()
  toPre: boolean;
  /** Names of weekdays. */
  @Input()
  weekdayNames: arrayWith7Strings;
  /** Names of months. */
  @Input()
  monthNames: arrayWith12Strings;

  constructor() { }

  ngOnInit(): void {
  }

}
