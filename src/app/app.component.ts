import { Component,AfterContentInit,ViewChildren,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  constructor(){
    //this.mainContent = new ElementRef<any>('mainContainer');
  }

  title = 'store-management';
  @ViewChild('mainContainer') private mainContent!:ElementRef<HTMLElement>
  ngAfterContentInit(){
    
  }
}
