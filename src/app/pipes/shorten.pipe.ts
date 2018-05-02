
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value) {
    return value.substring (0, 95);
  }
}
