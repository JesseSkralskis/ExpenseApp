import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate,setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';
 
 export class ExpenseListFilters extends React.Component{
    
    state = {
        calenderFocused: null
    };
   
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({
            calenderFocused 
        }))
        
    }
    onDatesChange = ({startDate, endDate}) => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
    }
   
   
   onTextChange = (e) => {
     this.props.setTextFilter(e.target.value);
   }
   onSortByChange = (e) => {
     if (e.target.value === "date") {
       this.props.sortByDate();
     } else if (e.target.value === "amount") {
       this.props.sortByAmount();
     }
   }

   
    render() {
       
      return (
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              {" "}
              <input
                className="text-input"
                placeholder="search expenses"
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div className="input-group__item">
              <select className="select"
                value={this.props.filters.sortBy}
                onChange={this.onSortByChange}
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="input-group__item">
              <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId={"abcd5678"}
                endDate={this.props.filters.endDate}
                endDateId={"abc1235"}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
              />
            </div>
          </div>
        </div>
      );
    }

 }

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
    
   
 })

 
const mapStateToProps = (state) => {
    return {
         filters: state.filters
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);
