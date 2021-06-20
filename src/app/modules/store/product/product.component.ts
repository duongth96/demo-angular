import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateOrUpdateComponent} from './create-or-update/create-or-update.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private _MatDialog:MatDialog
  ) { }

  filterToggle = false

  listProduct:any[] = []
  columnsToDisplay = ['stt','name','code','price','cost','quan'];
  selectedRow:any
  totalCount = 0
  query = {
    pageSize:10
  }

  ngOnInit(): void {
    this.listProduct = [{
      stt:1,
      name:'Bò húc lon 250ml',
      code: 'sp001',
      price:15000,
      cost:11000,
      quan:12
    },{
      stt:2,
      name:'Bia Hà Nội lon',
      code: 'sp003',
      price:12000,
      cost:9000,
      quan:12
    }];

    this.totalCount = this.listProduct.length;
  }

  onDelete(event:any){
    
  }

  onOpenModal_CreateOrUpdate():void{
    const dialogRef = this._MatDialog.open(CreateOrUpdateComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
