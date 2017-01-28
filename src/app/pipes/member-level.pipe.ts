import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../models/member.model';

@Pipe({
  name: 'memberLevel',
  pure: false
})

export class MemberLevelPipe implements PipeTransform {

  transform(input: any[], level: string): any[] {
    if (level === 'ALL') {
      return input;
    } else {
      let returnArray: any[] = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i].level === level) {
          returnArray.push(input[i]);
        }
      };
      return returnArray;
    }
  }

}
