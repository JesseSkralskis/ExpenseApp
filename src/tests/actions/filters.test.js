import {  setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';
import { start } from 'repl';
test('should return set startdate action object', () => {
    
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: "SET_START_DATE",
      startDate: moment(0)
    });
})