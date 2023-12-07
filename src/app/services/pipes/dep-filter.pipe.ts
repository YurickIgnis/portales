import { Pipe, PipeTransform } from '@angular/core';
import { DataTamite } from '../interfaces/tram.api.interface';

@Pipe({
  name: 'depFilter'
})
export class DepFilterPipe implements PipeTransform {

  transform(value: DataTamite[], filterBy: string): DataTamite[] {
    return value.filter(t => t.homoclave.includes(filterBy))
  }
}