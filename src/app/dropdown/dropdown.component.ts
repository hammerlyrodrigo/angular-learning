import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  items:  Observable<string[]>;

  @Output()
  itemChange: EventEmitter<any>;

  @Output()
  listClear: EventEmitter<any>;

  value: any = '';

  ngOnInit () {

  }

  constructor(private elementRef: ElementRef) {
    this.itemChange = new EventEmitter();
    this.listClear = new EventEmitter();
  }

  onChange(e: any) {
    this.itemChange.emit(this.value);
  }
}
