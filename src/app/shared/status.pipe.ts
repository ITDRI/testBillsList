import {Pipe, PipeTransform} from '@angular/core';

interface statusMap {
  new: string
  paid: string
  canceled: string
}

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const statusMap: statusMap = {
      new: 'Новый',
      paid: 'Оплачен',
      canceled: 'Отменен'
    }
    return statusMap[value] ? statusMap[value] : value;
  }

}
