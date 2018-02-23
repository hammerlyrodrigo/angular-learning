import { Pipe, PipeTransform } from '@angular/core';
import {ArrayUtils} from '../utils';

@Pipe({
  name: 'propertyPipe'
})
export class PropertyPipe implements PipeTransform {
  transform(values: any[], propertyName: string, unique: boolean = false): string[] {
    let result = ArrayUtils.mapProperty(propertyName, values);

    if (unique) {
      result =  ArrayUtils.filterUnique(result);
    }
    return result;
  }
}
