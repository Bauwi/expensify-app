import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage startLoginGoogle={() => {}} startLoginGithub={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLoginGoogle on Login With Google click', () => {
  const startLoginGoogle = jest.fn();
  const startLoginGithub = jest.fn();
  const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} startLoginGithub={startLoginGithub}/>);
  wrapper.find('button').at(0).simulate('click');
  expect(startLoginGoogle).toHaveBeenCalled();
});

test('should call startLoginGithub on Login With Github click', () => {
  const startLoginGoogle = jest.fn();
  const startLoginGithub = jest.fn();
  const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} startLoginGithub={startLoginGithub}/>);
  wrapper.find('button').at(1).simulate('click');
  expect(startLoginGithub).toHaveBeenCalled();
});