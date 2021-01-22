import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
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

  /** Current date. */
  @Input()
  date: string & Date | null;
  /** If the next date if before the previous one. */
  @Input()
  toPre: boolean;
  /** Callback for date changing. */
  @Output()
  handleChange = new EventEmitter<Date>();
  /** Short names of weekdays. */
  @Input()
  weekdayShortNames: arrayWith7Strings;
  /** The start year.  */
  @Input()
  yearStart: number;
  /** The end year.  */
  @Input()
  yearEnd: number;
  rows = [0, 1, 2, 3, 4, 5];
  cols = [0, 1, 2, 3, 4, 5, 6];
  days: (string | number)[][];
  dayIndex = 1;
  nop = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  refreshDays(date): void {
    this.days = generateDays(date);
  }

  handleChangeDay(value: number): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setDate(value);
    handleChange.emit(date);
  }

  handleChangeDayPreMonth(value: number): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setMonth(date.getMonth() - 1);
    date.setDate(value);
    handleChange.emit(date);
  }

  handleChangeDayNextMonth(value: number): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setMonth(date.getMonth() + 1);
    date.setDate(value);
    handleChange.emit(date);
  }

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
}
