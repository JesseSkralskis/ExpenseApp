import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

//before each helps eliminate duplicate code by saying befor each test these variables will be in play
let onSubmit, history, wrapper;
beforeEach(() => {
      onSubmit = jest.fn();
      history = { push: jest.fn() };
    wrapper = shallow(
       <AddExpensePage onSubmit={onSubmit} history={history} />
     );
})

//set up spies for the needed props
test('should render AddExpensePage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});
//need tp check that both sopees were called with the right stuff
test('should handle on Submit', () => {
    

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
    

    
})