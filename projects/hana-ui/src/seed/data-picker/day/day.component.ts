import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {arrayWith7Strings} from '../display/display.component';
import {generateDays} from '../utils';

const type = [1, ''];
@Component({
  selector: 'hana-day',
  templateUrl: './day.component.html',
  styleUrls: ['../date-picker/date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayComponent implements OnInit {

  constructor() { }

  get year(): number{
    return this.date.getFullYear();
  }

  get month(): number{
    return this.date.getMonth();
  }

  get preDisabled(): boolean{
    const {year, yearStart, month} = this;
    return year === yearStart && month === 0;
  }

  get nextDisabled(): boolean{
    const {year, yearEnd, month} = this;
    return year === yearEnd && month === 11;
  }

  get currentDay(): number{
    return this.date.getDate();
  }

  /** Current date. */
  date: string & Date | null;
  /** If the next date if before the previous one. */
  toPre: boolean;
  /** Callback for date changing. */
  handleChange: (date: Date) => void;
  /** Short names of weekdays. */
  weekdayShortNames: arrayWith7Strings;
  /** The start year.  */
  yearStart: number;
  /** The end year.  */
  yearEnd: number;
  rows = [0, 1, 2, 3, 4, 5];
  cols = [0, 1, 2, 3, 4, 5, 6];
  days: (string | number)[][];
  dayIndex = 1;
  nop = () => {};

  ngOnInit(): void {
  }

  refreshDays(date): void {
    this.days = generateDays(date);
  }

  handleChangeDay(value: number): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setDate(value);
    handleChange(date);
  }

  handleChangeDayPreMonth(value: number): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setMonth(date.getMonth() - 1);
    date.setDate(value);
    handleChange(date);
  }

  handleChangeDayNextMonth(value: number): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setMonth(date.getMonth() + 1);
    date.setDate(value);
    handleChange(date);
  }
}
