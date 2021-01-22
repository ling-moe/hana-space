import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
  date: string | Date | null;
  /** If the next date if before the previous one. */
  toPre: boolean;
  /** Names of weekdays. */
  weekdayNames: arrayWith7Strings;
  /** Names of months. */
  monthNames: arrayWith12Strings;

  constructor() { }

  ngOnInit(): void {
  }

}
