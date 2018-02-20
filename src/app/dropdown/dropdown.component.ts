import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input()
  label: string;

  @Input()
  items:  Observable<string[]>;

  @Output()
  change: EventEmitter<any>;

  value: any = '';

  constructor(private elementRef: ElementRef) {
    this.change = new EventEmitter();
  }

  selectionChanged() {
    debugger;
    this.change.emit(this.value);
  }
}
