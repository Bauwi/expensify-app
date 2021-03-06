import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotalCount={3} expensesTotalAmount={235} expenseCount={1}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesTotalCount={30} expensesTotalAmount={323565} expenseCount={23}/>)
  expect(wrapper).toMatchSnapshot();
});
