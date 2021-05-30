import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmClickDirective } from '../directives/confirm-click.directive';



@NgModule({
  declarations: [
    ConfirmClickDirective,
  ],
  exports:[
    ConfirmClickDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
