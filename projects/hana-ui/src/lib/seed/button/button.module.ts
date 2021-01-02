import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';



@NgModule({
  declarations: [ButtonComponent, ButtonGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
