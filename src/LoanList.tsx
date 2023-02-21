import React from 'react';
import { Loan } from './Loan';

type LoanListProps = {
  loans: Loan[];
  onEditLoan: (id: number) => void;
  onDeleteLoan: (id: number) => void;
  onMarkPaid: (id: number) => void;
  onMarkOverdue: (id: number) => void;
};

const LoanList: React.FC<LoanListProps> = ({ loans, onEditLoan, onDeleteLoan, onMarkPaid, onMarkOverdue }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Balance</th>
          <th>Payment Due Date</th>
          <th>Lender</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {loans.map(loan => (
          <tr key={loan.id}>
            <td>{loan.type}</td>
            <td>{loan.balance}</td>
            <td>{loan.paymentDueDate}</td>
            <td>{loan.lender}</td>
            <td>{loan.overdue ? 'Overdue' : loan.status}</td>
            <td>
              <button onClick={() => onEditLoan(loan.id)}>Edit</button>
              <button onClick={() => onDeleteLoan(loan.id)}>Delete</button>
              {loan.status !== 'Paid' && (
                <button onClick={() => onMarkPaid(loan.id)}>Mark Paid</button>
              )}
              {!loan.overdue && (
                <button onClick={() => onMarkOverdue(loan.id)}>Mark Overdue</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoanList;