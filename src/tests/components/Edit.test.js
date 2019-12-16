import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Edit} from "../../components/Edit";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<Edit
        editExpense={editExpense}
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[2]}
       
        />);
})




test('should render Edit page correctly', () => {
   expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should handle edit expense spies', () => {
 
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle remove expense spies', () => {
    
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });   
})