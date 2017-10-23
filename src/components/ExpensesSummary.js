import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotalAmount from '../selectors/expenses-total';
import selectExpensesCount from '../selectors/expenses-count';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesTotalCount, expenseCount, expensesTotalAmount}) => {
  const expensesWord = expenseCount <= 1 ? "expense" : 'expenses';
  const expensesWordHidden = expensesTotalCount - expenseCount <= 1 ? "expense" : 'expenses';
  const formattedExpensesTotalAmount = numeral(expensesTotalAmount / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expensesWord} totalling <span>{formattedExpensesTotalAmount}</span></h1>    
        <h3 className="page-header__subtitle"><span>{expensesTotalCount - expenseCount}</span> hidden {expensesWordHidden}</h3>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expensesTotalCount: selectExpensesCount(state.expenses),
    expenseCount: (selectExpenses(state.expenses, state.filters)).length,
    expensesTotalAmount: selectExpensesTotalAmount(selectExpenses(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpensesSummary);