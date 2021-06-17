export interface Bill {
  created: number
  updated: number
  billNumber: string
  status: 'new' | 'paid' | 'canceled'
  billTotal: number
  paymentMethod: 'creditCard' | 'debitСard' | 'elCheck'
}
