import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
//refactor to pull out in line functions, turn them into methods so they dont have to rerender
// set up mapDispatchToProps 2 things

export class Edit extends React.Component{
  
  onSubmit = (expense) => {
   console.log(expense)
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
    
  }

  onRemove = () => {
   this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        {/* in this instance of expense form we need to populate the fields so we
      pass some props to the child the expense match
      and what should happen when they push the button */}
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className=" buttons buttons--secondary" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
}



//we want to be able to pass the expense that matches the id that the user clicked on
//so using the connect state and props we can search through the expenses array in the store
//returning the 1 expense that matches the ids
//then that expense object i passed up to the component through props
const mapToProps = (state,props) => {
 
  return {
    //find allows us to look through an array looking for a single item
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense({ id } , expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})
  

  


export default connect(mapToProps,mapDispatchToProps)(Edit);


 