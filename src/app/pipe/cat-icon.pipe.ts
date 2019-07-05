import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catIcon'
})
export class CatIconPipe implements PipeTransform {

  transform(value: any) {
    if ( value === 'Usine') {
      return '';
    }
    if ( value === 'Bâtiment') {
      return '';
    }
    return 'Immeuble';

  }

}
