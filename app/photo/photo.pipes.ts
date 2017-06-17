import { Pipe, PipeTransform } from '@angular/core';
import { PhotoComponent } from './photo.component';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitle implements PipeTransform {
  transform(photos: PhotoComponent[], textTofind: string): PhotoComponent[] {

    textTofind = textTofind.toLowerCase();
    return photos.filter(photo => photo.titulo.toLocaleLowerCase().includes(textTofind));
  }
}
