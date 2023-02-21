export interface Loan {
  id: number;
  type: string;
  balance: number;
  paymentDueDate: string;
  lender: string;
  status: 'Paid' | 'Unpaid';
  overdue: boolean;
  interestRate:number;
}
