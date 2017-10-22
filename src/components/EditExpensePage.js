import React, { Component } from "react";
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import RemoveExpenseModal from './RemoveExpenseModal';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends Component {
  state = {
    isOpen: false
  }

  handleModalOpen = () => {
    this.setState(() => ({
      isOpen: true
    }))
  }

  handleModalClose = () => {
    this.setState(() => ({
      isOpen: false
    }))
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  }

  render() {
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            onSubmit={this.onSubmit}
            expense={this.props.expense}
          />
          <button className="button button--secondary" onClick={this.handleModalOpen}
          >
            Remove Expense
          </button>
          <RemoveExpenseModal 
            id={this.props.expense.id}
            isOpen={this.state.isOpen}
            handleModalClose={this.handleModalClose}
          />
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
