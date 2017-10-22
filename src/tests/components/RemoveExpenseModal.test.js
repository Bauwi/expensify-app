import React from 'react';
import { shallow } from 'enzyme';
import { RemoveExpenseModal } from '../../components/RemoveExpenseModal';
import expenses from '../fixtures/expenses';

let startRemoveExpense, handleModalClose, history, wrapper;

beforeEach(() => {
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  handleModalClose = jest.fn();
  wrapper = shallow(
    <RemoveExpenseModal
      startRemoveExpense={startRemoveExpense}
      history={history} 
      id={expenses[1].id}
      />);
});

test('should correctly render Remove Expense Modal', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should remove expense', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id} );
});