import { Component, OnInit,Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatChipInputEvent} from '@angular/material/chips'
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss']
})
export class CreateOrUpdateComponent implements OnInit, AfterViewInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(
    public dialogRef: MatDialogRef<CreateOrUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder:FormBuilder
  )  {
    this.formCreateOrUpdate = new FormGroup({
      name:new FormControl('',[Validators.required]),
      code:new FormControl('',[Validators.required]),
      barCode:new FormControl('',[Validators.required]),
      unit:new FormControl('',[Validators.required]),
      group:new FormControl('',[Validators.required]),
      cost:new FormControl(''),
      price:new FormControl(''),
      quantity:new FormControl(''),
    });

  }

  dialogTitle = "Thêm mới sản phẩm"
  formCreateOrUpdate:FormGroup;
  model={
    name:'',
    code:'',
    barCode:'',
    unit:'',
    group:[] as any[],
    cost:'',
    price:'',
    quantity:''
  }
  listGroup:any[]=[]
  listGroupSelected:any[] =[]


  get f(){return this.formCreateOrUpdate.controls}
  ngOnInit(): void {
    this.listGroup = [
      {name:'Loại một', uid:'loaimot'},
      {name:'Loại hai', uid:'loaihai'}
    ]
  }

  ngAfterViewInit(){
    this.barcodeScanner!.start();
    this.barCodeAudio = new Audio();
    this.barCodeAudio.src = 'assets/sounds/beep-06.mp3'
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(){
    console.log(this.model)
    this.formCreateOrUpdate.markAllAsTouched()
    if(this.formCreateOrUpdate.invalid){
      return;
    }
    this.dialogRef.close();
  }


  ///barcode scanner
  barCodeAudio:any
  barcodeValue:string = '';
  @ViewChild(BarcodeScannerLivestreamComponent) barcodeScanner: BarcodeScannerLivestreamComponent | undefined;
  onValueChanges(result:any) {
    if(this.barcodeValue) return;
    console.log("true",result.codeResult)

    this.barcodeValue = result.codeResult.code;
    this.model.barCode = this.barcodeValue;

    this.barCodeAudio.play()

    setTimeout(() => {
      console.log('started...');
      this.barcodeValue = ''
    }, 2000);
    
  }
 
  onStarted(started:any) {
    console.log(started);
  }

}
