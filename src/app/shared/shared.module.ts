import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmClickDirective } from '../directives/confirm-click.directive';
import { CpSelectboxComponent } from './components/cp-selectbox/cp-selectbox.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    ConfirmClickDirective,
    CpSelectboxComponent,
  ],
  exports:[
    ConfirmClickDirective,
    CpSelectboxComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
