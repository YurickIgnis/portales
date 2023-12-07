import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoA'
})
export class FormatoAPipe implements PipeTransform {

  transform(value: string): string {

    const [day, month, year, hours, minutes, seconds] = value.split(/[/ :]/);
    const dateObj = new Date(`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);

/*     console.log(value);
    console.log(dateObj); */
    return `${hours}:${minutes}`;
  }

}
