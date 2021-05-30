import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarshboardRoutingModule } from './darshboard-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DarshboardRoutingModule
  ]
})
export class DarshboardModule { }
