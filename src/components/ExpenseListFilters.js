import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate,setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';
 
class ExpenseListFilters extends React.Component{
    
    state = {
        calenderFocused: null
    };
   
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({
            calenderFocused 
        }))
        
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render() {
       
      return (
          

        <div>
          expenseListfilters
            {/* any change in the input fires a dispatch that updates the text in textfilter in the store */}
            <input
              type="text"
              value={this.props.filters.text}
              onChange={e => {
                // known as a controlled input meaning the value is controlled by javascript
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
            {/* //how to create a pull down select menu with lowercase */}
            <select
              value={this.props.filters.sortBy}
              onChange={e => {
                if (e.target.value === "date") {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === "amount") {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={uuid()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuid()}
              onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
            />
          </div>
        );
    }

}

 
const mapStateToProps = (state) => {
    return {
         filters: state.filters
     }
 }

export default connect(mapStateToProps)(ExpenseListFilters);
