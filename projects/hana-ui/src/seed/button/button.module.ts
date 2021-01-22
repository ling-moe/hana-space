import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import {IconModule} from '../icon/icon.module';



@NgModule({
  declarations: [ButtonComponent, ButtonGroupComponent],
    imports: [
        CommonModule,
        IconModule
    ],
  exports: [ButtonComponent, ButtonGroupComponent]
})
export class ButtonModule { }
