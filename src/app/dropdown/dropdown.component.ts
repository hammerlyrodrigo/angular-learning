import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
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
  itemChange: EventEmitter<any>;

  value: any = '';

  constructor(private elementRef: ElementRef) {
    this.itemChange = new EventEmitter();
  }

  onChange(e: any) {
    this.itemChange.emit(this.value);
  }
}
