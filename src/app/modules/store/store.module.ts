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
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {SharedModule} from 'src/app/shared/shared.module'

import { StoreRoutingModule } from './store-routing.module';
import { ProductComponent } from './product/product.component';
import { CreateOrUpdateComponent } from './product/create-or-update/create-or-update.component';


@NgModule({
  declarations: [
    ProductComponent,
    CreateOrUpdateComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
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
    SharedModule
  ]
})
export class StoreModule { }
