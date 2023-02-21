import React from "react";
import {Loan} from "./Loan";

interface LoanTableProps {
  loans: Loan[];
  onAddLoan: () => void;
  onSelectLoan: (loan: Loan) => void;
  onDeleteLoan: (loan: Loan) => void;
}

const LoanTable = ({
  loans,
  onAddLoan,
  onSelectLoan,
  onDeleteLoan,
}: LoanTableProps) => {
  const handleEditLoan = (loan: Loan) => {
    onSelectLoan(loan);
  };

  const handleDeleteLoan = (loan: Loan) => {
    if (
      window.confirm(
        `Are you sure you want to delete the ${loan.type} loan from ${loan.lender}?`
      )
    ) {
      onDeleteLoan(loan);
    }
  };
  
  return (
    <div>
      <button onClick={onAddLoan}>Add Loan</button>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Lender</th>
            <th>Balance</th>
            <th>Interest Rate</th>
            <th>Payment Due Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.type}</td>
              <td>{loan.lender}</td>
              <td>{loan.balance}</td>
              <td>{loan.interestRate}%</td>
              <td>{loan.paymentDueDate.toString().substr(0, 10)}</td>
              <td>
                <button onClick={() => handleEditLoan(loan)}>Edit</button>
                <button onClick={() => handleDeleteLoan(loan)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
