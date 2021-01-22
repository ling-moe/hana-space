import { NgModule } from '@angular/core';
import {ButtonModule} from './button/button.module';
import {IconModule} from './icon/icon.module';
import {CheckboxModule} from './checkbox/checkbox.module';
import {DatePickerModule} from './data-picker/date-picker.module';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    IconModule,
    CheckboxModule,
    DatePickerModule,
  ],
  exports: [
    ButtonModule,
    IconModule,
    CheckboxModule,
    DatePickerModule,
  ],
})
export class SeedModule { }