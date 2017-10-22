import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import selectExpensesCount from '../../selectors/expenses-count';

test('should return the count of expenses', () => {
  const result = selectExpensesCount(expenses);
  expect(result).toEqual(expenses.length);
});