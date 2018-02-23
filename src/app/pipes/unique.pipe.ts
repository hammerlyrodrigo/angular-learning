import { Pipe, PipeTransform } from '@angular/core';
import {ArrayUtils} from '../utils';

@Pipe({
  name: 'uniquePipe'
})
export class UniquePipe implements PipeTransform {
  transform(values: string[]): string[] {
    return ArrayUtils.filterUnique(values);
  }
}
