import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hana-year-mouth',
  templateUrl: './year-mouth.component.html',
  styleUrls: ['../date-picker/date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearMouthComponent implements OnInit {

  /** Current date. */
  date: string & Date | null;
  /** If the next date if before the previous one. */
  toPre: boolean;
  /** Callback for date changing. */
  handleChange: (date: Date) => void;
  /** The start year.  */
  yearStart: number;
  /** The end year.  */
  yearEnd: number;
  years: number[];
  months: number[];
  monthsLabels: string[];

  constructor() { }

  ngOnInit(): void {
    const {yearStart, yearEnd} = this;
    const length = yearEnd - yearStart + 1;
    this.years = new Array(length);
    for (let i = 0; i < length; i++) {
      this.years[i] = i + yearStart;
    }
    this.months = new Array(12);
    this.monthsLabels = new Array(12);
    for (let i = 0; i < 12; i++) {
      this.months[i] = i;
      this.monthsLabels[i] = i < 9 ? '0' : '' + (i + 1);
    }
  }

  changeDate(method, value): void {
    const {date: oldDate, handleChange} = this;

    const date = new Date(oldDate.getTime());
    date.setDate(1);
    date[method](value);
    handleChange(date);
  }

  handleChangeMonth(value): void {
    this.changeDate('setMonth', value);
  }

  handleChangeYear(value): void {
    this.changeDate('setYear', value);
  }

  handleChangeToPre(year, month): void {
    if (this.preDisabled){
      return;
    }
    this.changeDate('setMonth', month - 1);
  }

  handleChangeToNext(year, month): void {
    if (this.nextDisabled){
      return;
    }
    this.changeDate('setMonth', month + 1);
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

}
