import {Pipe, PipeTransform} from '@angular/core';

interface paynentsMap {
  creditCard: string
  debitСard: string
  elCheck: string
}

@Pipe({
  name: 'payment'
})
export class PaymentPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const paymentsMap: paynentsMap = {
      creditCard: 'Кредитная карта',
      debitСard: 'Дебетовая карта',
      elCheck: 'Электронный чек'
    }
    return paymentsMap[value] ? paymentsMap[value] : value;
  }

}
