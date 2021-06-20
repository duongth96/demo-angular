import { Component, OnInit,ViewChild, AfterViewInit, Pipe, PipeTransform  } from '@angular/core';
import { BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {DataTableDataSource} from '../ex-cart-datasource'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit,AfterViewInit {

  constructor() { }

  ///table
  @ViewChild(MatPaginator,{static:true}) paginator!: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort!: MatSort;
  cart:MatTableDataSource<any> = new MatTableDataSource<any>();

  columnsToDisplay = ['stt','name','price','quan','total','action'];
  selectedRow:any
  totalCount = 0
  query = {
    pageSize:10
  }
  paying = 0

  //
  searchItem = ''

  ngOnInit(): void {
    //this.cart = new DataTableDataSource(this.paginator, this.sort);
    this.totalCount = this.cart.data.length;

  }
  ngAfterViewInit(){
    this.barcodeScanner!.start();
    this.barCodeAudio = new Audio();
    this.barCodeAudio.src = 'assets/sounds/beep-06.mp3'
  }

  //click event
  addItem(){
    this.addToCart(this.searchItem,this.searchItem)
  }

  addToCart(name:string,code:string,price:number = 1000,quan:number = 1){
    let item = this.cart.data.find(c=>c.code == code)

    if(item){
      item.quan++;
    }
    else{
      item = {
        stt: this.cart.data.length+1,
        name,
        code,
        price,
        quan
      }
      this.cart.data.push(item)
    }
    this.totalCount = this.cart.data.length;
    this.cart._updateChangeSubscription()
  }
  removeCartItem(item:any){
    let index = this.cart.data.findIndex(c=>c == item);
    this.cart.data.splice(index,1)
    this.cart._updateChangeSubscription()
  }
  get cartTotalPrice(){
    return this.cart.data.reduce((a,c)=>a+=c.price * c.quan,0)
  }
  get cartTotalItem(){
    return this.cart.data.reduce((a,c)=>a+=c.quan,0)
  }

  ///barcode scanner
  barCodeAudio:any
  barcodeValue:string = '';
  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner: BarcodeScannerLivestreamComponent | undefined;
  onValueChanges(result:any) {
    if(this.barcodeValue) return;
    console.log("true",result.codeResult)

    this.barcodeValue = result.codeResult.code;
    this.barCodeAudio.play()


    this.addToCart(this.barcodeValue,this.barcodeValue)
    

    setTimeout(() => {
      console.log('started...');
      this.barcodeValue = ''
    }, 2000);
    
  }
 
  onStarted(started:any) {
    console.log(started);
  }

}

@Pipe({name: 'updatePrice'})
export class UpdatePricePipe implements PipeTransform {
  transform(value: any[]): number {
    return value.reduce((a,c)=>a+=c.price,0);
  }
}
