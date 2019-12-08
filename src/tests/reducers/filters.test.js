import filterReducer from '../../reducers/filters';
import moment from 'moment';
import expenses from "../fixtures/expenses";

test('should set up default filter values', () => {
    //use the reduz init type object
    const state = filterReducer(undefined, { type: '@@' });
    expect(state).toEqual({
      text: "",
      sortBy: "date",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    });
})

test('should test if sort by value changes', () => {
    const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe('amount');
})

test('should setSortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filterReducer(currentState, { type: "SORT_BY_DATE" });

    expect(state.sortBy).toBe('date');


})

test('should set text filter', () => {
    const text = 'text goes through';
    const action = {
        type: "SET_TEXT_FILTER",
        text
    }

    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
})

test('should set start date filter', () => {
    const startDate = moment(0);
    const action = {
        type: "SET_START_DATE",
        startDate
    };

    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
})

test("should set end date filter", () => {
  const endDate = moment(0).add(2,'days');
  const action = {
    type: "SET_END_DATE",
    endDate
  };

  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});

