import { Directive, 
	Output, 
	EventEmitter, 
	HostListener, 
	Component, 
	ElementRef, 
	Renderer2, 
	Inject, 
	Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Directive({
  selector: '[appConfirmClick]'
})
export class ConfirmClickDirective {
	@Output() appConfirmClick: EventEmitter<any> = new EventEmitter();
 	@Input() validatebefore: boolean = false;
	@Output() invalidate: EventEmitter<any> = new EventEmitter();
  	constructor(
  		public dialog: MatDialog, 
  		private el: ElementRef, 
  		renderer: Renderer2) {}
  	@HostListener('click', ['$event'])
	onClick(e:any) {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
		  	width: '400px'
		});

		dialogRef.afterClosed().subscribe((result:any) => {
			if (result !== true) {
			  e.preventDefault();
			  e.stopPropagation();
			} else {
			  this.appConfirmClick.next(e);
			}
		});

  	}

}
