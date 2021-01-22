import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { YearMouthComponent } from './year-mouth/year-mouth.component';
import { SelectComponent } from './select/select.component';
import { DayComponent } from './day/day.component';



@NgModule({
  declarations: [DatePickerComponent, ContainerComponent, DisplayComponent, YearMouthComponent, SelectComponent, DayComponent],
  imports: [
    CommonModule
  ],
  exports: [DatePickerComponent]
})
export class DatePickerModule { }
