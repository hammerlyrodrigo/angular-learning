import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

  value: any = '';

  ngOnInit () {
    this.items.subscribe ( data => {
      if (data.indexOf(this.value) === -1) {
        this.value = '';
      }
    });
  }

  constructor(private elementRef: ElementRef) {
    this.itemChange = new EventEmitter();
  }

  onChange(e: any) {
    debugger;
    this.itemChange.emit(this.value);
  }
}
