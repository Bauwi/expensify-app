import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={235} expenseCount={1}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotal={323565} expenseCount={23}/>)
  expect(wrapper).toMatchSnapshot();
});