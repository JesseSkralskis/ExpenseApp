import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';
import moment from 'moment';
import { start } from 'repl';
test('should return set startdate action object', () => {
    
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: "SET_START_DATE",
      startDate: moment(0)
    });
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: "SET_END_DATE",
        endDate: moment(0)
    });
})

test('should create setTextFilter action object', () => {
    const action = setTextFilter("Rent");
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text: 'Rent'
    });
})

test("should create default setTextFilter action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should create sortbyDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
    
  });
});

test("should create sortbyAmount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});


