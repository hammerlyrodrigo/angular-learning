import { Pipe, PipeTransform } from '@angular/core';
import {ArrayUtils} from '../utils';

@Pipe({
  name: 'sortAscPipe'
})
export class SortAscPipe implements PipeTransform {
  transform(values: string[]): string[] {
    return ArrayUtils.sortAsc(values);
  }
}
