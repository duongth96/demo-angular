import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, 
  ElementRef, 
  ViewChild, 
  Input,Output, 
  OnInit, AfterViewInit,
  EventEmitter,
  forwardRef} from '@angular/core';
import {FormControl,NG_VALUE_ACCESSOR,ControlValueAccessor, ControlContainer} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatFormFieldAppearance} from '@angular/material/form-field';

export interface selData{
  text:string
  value:string
}

@Component({
  selector: 'app-cp-selectbox',
  templateUrl: './cp-selectbox.component.html',
  styleUrls: ['./cp-selectbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CpSelectboxComponent),
      multi: true
    }
  ]
})
export class CpSelectboxComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  constructor(
    private _controlContainer: ControlContainer
  ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this._data!.filter(c=>!this.fruits.includes(c)).slice()));
    
    this._bindText = 'text';
    this._bindValue = 'value';
  }
  
  ngOnInit(){
    if(!this._bindText)
      this._bindText = 'text'
    if(!this._bindValue)
      this._bindText = 'value'
    if(!this._data)
      this._data = []
    
    if(this.ngModel){
      let stringArr = `,${this.ngModel.toString()},`
      this.fruits = this._data.filter(c=> stringArr.includes(`,${c[this._bindValue]},`))
    }

    this.control = this._controlContainer.control?.get(this.formControlName)??{}
    //const ctrlValidates = control.validator('')

  }
  ngAfterViewInit(){
    
  }

  @Input() appearance : MatFormFieldAppearance =  'outline' as MatFormFieldAppearance
  @Input('data') _data:any[] = []
  @Input('bindValue') _bindValue:string
  @Input('bindText') _bindText:string
  @Input('placeholder') _placeholder:string = 'Tìm kiếm...'
  @Input('label') _label:string = 'Tiêu đề'

  @Input() formControlName:string = ''
  @Input() ngModel:any
  @Output() ngModelChange = new EventEmitter<any[]>();

  control:any
  
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<Array<any>>;
  fruits: Array<any>  = [];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('auto') matAutocomplete: MatAutocomplete | undefined;


  add(event: any): void {
    this.fruitCtrl.setValue('');
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
    this.ngModel = this.fruits.map(c=>c[this._bindValue])
    this.ngModelChange.emit(this.ngModel);
    this.fruitCtrl.setValue('');
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(this._data?.find(c=>c[this._bindValue] == event.option.value));
    this.fruitInput!.nativeElement.value = '';
    this.fruitCtrl.setValue('');

    this.ngModel = this.fruits.map(c=>c[this._bindValue])
    this.ngModelChange.emit(this.ngModel);
  }

  private _filter(value: any): string[] {
    const filterValue = (value[this._bindText!] || value).toLowerCase();
    return this._data!.filter(fruit =>  !this.fruits.includes(fruit) && (fruit[this._bindText!] || fruit).toLowerCase().includes(filterValue));
  }

  // from acessor 
  writeValue(input: any) {
    this.ngModel = input;
  }
  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
