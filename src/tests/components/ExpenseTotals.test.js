import React from 'react';
import { ExpenseTotals } from '../../components/ExpenseTotals';
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';

test('should render the correct message with one value', () => {
    const wrapper = shallow(<ExpenseTotals expensesCount={1} expensesTotal={235} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render the correct message with multiple values", () => {
  const wrapper = shallow(
    <ExpenseTotals expensesCount={23} expensesTotal={278790} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});

