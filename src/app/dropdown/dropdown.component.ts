import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'].previousValue !== undefined &&
        changes['items'].currentValue.indexOf(this.value) === -1 &&
        '' !== this.value) {
      this.listClear.emit();
      this.value = '';
    }
  }

  constructor() {
    this.itemChange = new EventEmitter();
    this.listClear = new EventEmitter();
  }

  onChange() {
    this.itemChange.emit(this.value);
  }
}
