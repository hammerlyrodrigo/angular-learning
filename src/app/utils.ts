

export class ArrayUtils {
  static sortAsc(array: string[]): string[] {
    return [].concat.apply([], array.sort((a, b) => a > b ? 1 : -1));
  }

  static filterUnique(array: string[]): string[] {
    return array.filter((v, i, a) => v && a.indexOf(v) === i);
  }

  static filter(array: any[], propertyName: string, propertyValue: string): any[] {
    return array.filter(function(v) {
      if (Array.isArray(v[propertyName])) {
        return v[propertyName].indexOf(propertyValue) !== -1;
      } else {
        return v[propertyName] === propertyValue;
      }
    });
  }

  static mapProperty( property: string, array: any[]): string[] {
    return array.map(obj => obj[property]);
  }

  static flatten(array: any[]): any[] {
    return [].concat.apply([], array);
  }

  static deepCopy(array: any[]): any[] {
    return array.map( element => Object.assign({}, element));
  }
}
