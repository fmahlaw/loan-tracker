import React, { useState } from 'react';
import {Loan} from './Loan';
import LoanForm from './LoanForm';
import LoanList from './LoanList';

const App = () => {
  const [loans, setLoans] = useState<Loan[]>([
    {
      id: 1,
      type: 'Car Loan',
      lender: 'ABC Bank',
      balance: 15000,
      interestRate: 4.5,
      paymentDueDate: "202321",
  status: 'Unpaid',
  overdue: false,
    },
    {
      id: 2,
      type: 'Home Loan',
      lender: 'XYZ Bank',
      balance: 200000,
      interestRate: 3.5,
      paymentDueDate: "2023215", status: 'Unpaid',
      overdue: false,
    },
  ]);
  const [editingLoan, setEditingLoan] = useState<Loan | null>(null);

  const addLoan = (loan: Loan) => {
    setLoans([...loans, loan]);
  };

  const updateLoan = (updatedLoan: Loan) => {
    const updatedLoans = loans.map(loan => (loan.id === updatedLoan.id ? updatedLoan : loan));
    setLoans(updatedLoans);
  };

  const deleteLoan = (id: number) => {
    const updatedLoans = loans.filter(loan => loan.id !== id);
    setLoans(updatedLoans);
  };

  const openAddLoanForm = () => {
    setEditingLoan(null);
  };

  const openEditLoanForm = (loan: Loan) => {
    setEditingLoan(loan);
  };

  const closeLoanForm = () => {
    setEditingLoan(null);
  };

  const sortLoansByBalance = () => {
    const sortedLoans = loans.slice().sort((a, b) => a.balance - b.balance);
    setLoans(sortedLoans);
  };

  const sortLoansByPaymentDueDate = () => {
    const sortedLoans = loans.slice().sort((a, b) => parseInt(a.paymentDueDate )- parseInt(b.paymentDueDate));
    setLoans(sortedLoans);
  };

  const filterLoansByType = (type: string) => {
    const filteredLoans = loans.filter(loan => loan.type.toLowerCase().includes(type.toLowerCase()));
    setLoans(filteredLoans);
  };

  const filterLoansByLender = (lender: string) => {
    const filteredLoans = loans.filter(loan => loan.lender.toLowerCase().includes(lender.toLowerCase()));
    setLoans(filteredLoans);
  };

  const calculateTotalBalance = () => {
    const totalBalance = loans.reduce((total, loan) => total + loan.balance, 0);
    return totalBalance;
  };

  const markLoanPaid = (id: number) => {
    const updatedLoans = loans.map(loan => (loan.id === id ? { ...loan, paid: true } : loan));
    setLoans(updatedLoans);
  };

  const markLoanOverdue =
  (id: number) => {
    const updatedLoans = loans.map(loan => (loan.id === id ? { ...loan, overdue: true } : loan));
    setLoans(updatedLoans);
    };
    
    return (
    <div className="App">
    <h1>Loan Tracker App</h1>
    <p>Total Balance: {calculateTotalBalance()}</p>
    <button onClick={openAddLoanForm}>Add Loan</button>
    <button onClick={sortLoansByBalance}>Sort by Balance</button>
    <button onClick={sortLoansByPaymentDueDate}>Sort by Payment Due Date</button>
    <input type="text" placeholder="Filter by Type" onChange={e => filterLoansByType(e.target.value)} />
    <input type="text" placeholder="Filter by Lender" onChange={e => filterLoansByLender(e.target.value)} />
    {editingLoan ? (
    <LoanForm loan={editingLoan} onSave={updateLoan} onCancel={closeLoanForm} />
    ) : (
    <LoanList loans={loans} onEdit={openEditLoanForm} onDelete={deleteLoan} onMarkPaid={markLoanPaid} onMarkOverdue={markLoanOverdue} />
    )}
    </div>
    );
    };
    
    export default App;