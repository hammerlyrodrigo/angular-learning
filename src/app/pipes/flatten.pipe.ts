import { Pipe, PipeTransform } from '@angular/core';
import {ArrayUtils} from '../utils';

@Pipe({
  name: 'flattenPipe'
})
export class FlattenPipe implements PipeTransform {
  transform(values: string[]): string[] {
    return ArrayUtils.flatten(values);
  }
}
