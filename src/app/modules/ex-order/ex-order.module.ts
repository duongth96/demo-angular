import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatIconModule} from '@angular/material/icon'
import{MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {SharedModule} from 'src/app/shared/shared.module'
import {MatDialogModule} from '@angular/material/dialog'
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";


import { ExOrderRoutingModule } from './ex-order-routing.module';
import { CreateComponent,UpdatePricePipe } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    UpdatePricePipe
  ],
  imports: [
    CommonModule,
    ExOrderRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    SharedModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule,ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    BarcodeScannerLivestreamModule
  ]
})
export class ExOrderModule { }
