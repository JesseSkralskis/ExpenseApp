import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import  ExpenseListItem  from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test('should render an instance of expense', () => {
    //instead of naming individual props we can use spread operator to get all the props much easier
    const description = expenses[0].description;
    const amount = expenses[0].amount;
    const  createdAt = expenses[0].createdAt;
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})