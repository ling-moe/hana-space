import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerDirective } from './divider.directive';



@NgModule({
  declarations: [DividerDirective],
  imports: [
    CommonModule
  ],
  exports: [DividerDirective]
})
export class DividerModule { }
