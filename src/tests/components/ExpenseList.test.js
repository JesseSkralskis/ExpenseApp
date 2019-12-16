import React from 'react';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses'


//expense list requires expenses props so we provide the test data as a prop 
//to <ExpenseList/> 
test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})