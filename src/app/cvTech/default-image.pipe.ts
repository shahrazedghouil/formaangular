import { Pipe, PipeTransform } from '@angular/core';
import { CvComponent } from './cv/cv.component';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value){
      return 'cv.jpg';
    }
    return value;
  }
}
