import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { startRemoveExpense } from '../actions/expenses';

export class RemoveExpenseModal extends Component {
  onRemoveExpense = () => {
    this.props.startRemoveExpense({id: this.props.id});
    this.props.history.push('/dashboard');
  }


  render() {
    return (
      <div>
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleModalClose}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
      >
      <h3 className="modal__title">You are about to delete this expense. </h3>
      <h3 className="modal__title">Do you want to confirm ?</h3>
      <div>
        <button className="button button--danger button--aside" onClick={this.onRemoveExpense}>Remove</button>      
        <button className="button button--aside" onClick={this.props.handleModalClose}>Cancel</button>
      </div>
     </Modal>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RemoveExpenseModal));
