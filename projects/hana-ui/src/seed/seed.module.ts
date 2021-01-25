import { NgModule } from '@angular/core';
import {ButtonModule} from './button/button.module';
import {IconModule} from './icon/icon.module';
import {CheckboxModule} from './checkbox/checkbox.module';
import {DatePickerModule} from './data-picker/date-picker.module';
import {DividerModule} from './divider/divider.module';
import { ImageModule } from './image/image.module';
import { LinkModule } from './link/link.module';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    IconModule,
    CheckboxModule,
    DatePickerModule,
    DividerModule,
    ImageModule,
    LinkModule,
  ],
  exports: [
    ButtonModule,
    IconModule,
    CheckboxModule,
    DatePickerModule,
    DividerModule,
    LinkModule,
  ],
})
export class SeedModule { }
