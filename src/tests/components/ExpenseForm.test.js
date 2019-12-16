import React from 'react';
import { shallow} from 'enzyme';
import  ExpenseForm  from '../../components/ExpenseForm';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import moment from 'moment';



test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)

    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseForm with expensedata', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
//using simulate to create the submit
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
     expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
            
        }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
// can use at with find to return the input with the index
test('should set description on input change', () => {
   const  value = 'testing descrtiption'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
      expect(toJSON(wrapper)).toMatchSnapshot();

});

test('should set note to expected input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'I run rap';
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();

});

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '123.32'
    
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })

    expect(wrapper.state('amount')).toBe(value);

});

test("should not set amount if invalid data", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "123.898";

    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: {
                value
            }
        });

    expect(wrapper.state("amount")).toBe('');
});
//this is how to create a spy function
//look at jest documentation for all the uses

test('should call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
 wrapper.find("form").simulate("submit", {
   preventDefault: () => {}
 });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[1].description,
      amount: expenses[1].amount,
      note: expenses[1].note,
      createdAt: expenses[1].createdAt
    });
})
//enzyme gives us a method to call prop so we can access the prop
//for some reason not getting the node? so its breaking???
//
test('should change the date correctly', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
    expect(wrapper.state('createdAt')).toEqual(now)

});

test("should set calender focus  correctly", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
   
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
      focused
    });
    expect(wrapper.state("calenderFocused")).toBe(focused);
});

    
    
    

    

    


    

    

    
