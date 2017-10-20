import React, { Component } from "react";
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends Component {
  onRemoveExpense = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/dashboard');
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  }

  render() {
    return(
      <div>
        <ExpenseForm 
        onSubmit={this.onSubmit}
        expense={this.props.expense}
        />
        <button onClick={this.onRemoveExpense}
        >
          Remove
        </button>
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
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
