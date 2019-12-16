import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { ExpenseListFilters }  from "../../components/ExpenseListFilters";
import { filters, filters2 } from '../fixtures/filters';
import moment from 'moment';





let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    


    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
   
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
      />
    );


});

test('should render ExpenseListFilters correctly', () => {
   expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: filters2
    })
     expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should handle a text change', () => {
    const value = 'balls'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    });
   
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: filters2
    })
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });
    
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
 
  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });
    console.log(wrapper.debug());
  
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date Changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find("withStyles(DateRangePicker)").prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle on focus change correctly', () => {
    const onFocusChange = jest.fn();
    const calenderFocused = 'endDate';
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);




});



