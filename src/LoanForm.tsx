import React, { useState } from 'react';
import { Loan } from './Loan';

interface LoanFormProps {
  loan: Loan;
  onSubmit: (loan: Loan) => void;
  onCancel: () => void;
}

const LoanForm = ({ loan, onSubmit, onCancel }: LoanFormProps) => {
  const [type, setType] = useState(loan.type);
  const [lender, setLender] = useState(loan.lender);
  const [balance, setBalance] = useState(loan.balance);
  const [interestRate, setInterestRate] = useState(loan.interestRate);
  const [paymentDueDate, setPaymentDueDate] = useState(loan.paymentDueDate);
  const [status, setStatus] = useState(loan.status);
  const [overdue, setOverdue] = useState(loan.overdue);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      id: loan.id,
      type,
      lender,
      balance,
      interestRate,
      paymentDueDate,
      status,
      overdue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" value={type} onChange={event => setType(event.target.value)} />
        </div>
        <div>
          <label htmlFor="lender">Lender:</label>
          <input type="text" id="lender" value={lender} onChange={event => setLender(event.target.value)} />
        </div>
        <div>
          <label htmlFor="balance">Balance:</label>
          <input type="number" id="balance" value={balance} onChange={event => setBalance(parseFloat(event.target.value))} />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate:</label>
          <input type="number" id="interestRate" value={interestRate} onChange={event => setInterestRate(parseFloat(event.target.value))} />
        </div>
        <div>
          <label htmlFor="paymentDueDate">Payment Due Date:</label>
          <input type="date" id="paymentDueDate" value={paymentDueDate.toString().substr(0, 10)} onChange={event => setPaymentDueDate(event.target.value)} />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={event => setStatus(event.target.value as 'Paid' | 'Unpaid')}>
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
        <div>
          <label htmlFor="overdue">Overdue:</label>
          <input type="checkbox" id="overdue" checked={overdue} onChange={event => setOverdue(event.target.checked)} />
        </div>
        <div>
          <button type="submit">{loan.id ? 'Save' : 'Add'}</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
