import React from "react";

import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from '../actions/expenses'
//this component which is the parent to the expense form passes a prop down to its child
//that is a function that will take the expense info that a user fills out
//and then dispatch the adExpense action on that data which will change the redux store to add
//to the array of expenses

export class AddExpensePage extends React.Component {
  
  onSubmit = (expense) => {
   
    //because of mapDispatchToProps we can now abtract our dispatcher functions away from the component the code which will make it testable
    // props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    //react router has props handed to it in this case we use push to redirect
   this.props.history.push("/");
  };
  render() {
    
    
    return (
      <div>
        <h1>Add Expense</h1>

        <ExpenseForm
          //passing this prop down to the child which is the form
          //now this function is no longer "inline" meaning it doesnt get called every render
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}


// connect seccond argument 
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: ( expense ) => dispatch(startAddExpense( expense ))
});


export default connect(undefined , mapDispatchToProps)(AddExpensePage);
