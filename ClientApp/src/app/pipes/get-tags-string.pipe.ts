import { Pipe, PipeTransform } from '@angular/core';
import { ITag } from '../models/entities/ITag';

@Pipe({
  name: 'getTagsString'
})
export class GetTagsStringPipe implements PipeTransform {

  transform(value: ITag[]): string {
    return value.join(", ");
  }

}
