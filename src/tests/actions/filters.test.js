import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount
} from '../../actions/filters';
import moment from 'moment';

//SET_START_DATE
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
});

//SET_END_DATE
test('should genrate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type:'SET_END_DATE',
    date: moment(0)
  })
});


//SORT_BY_AMOUNT
test('should generate sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
})

//SORT_BY_DATE
test('should generate sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({ type: 'SORT_BY_DATE' });
})

// SET_TEXT_FILTER
test('should generate set text filter action object if text provided', () => {
  const action = setTextFilter('123abc');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '123abc'
  })
})

test('should generate set text filter action object if text is not provided', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})