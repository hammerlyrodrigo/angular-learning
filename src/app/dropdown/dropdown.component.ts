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
  valueChange: EventEmitter<any>;

  selectedItem: any = '';

  constructor(private elementRef: ElementRef) {
    this.valueChange = new EventEmitter();
  }

  ngOnInit() {
  }

  selectionChanged() {
    this.valueChange.emit(this.selectedItem);
  }
}
