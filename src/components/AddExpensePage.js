import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from '../actions/expenses'
//this component which is the parent to the expense form passes a prop down to its child
//that is a function that will take the expense info that a user fills out
//and then dispatch the adExpense action on that data which will change the redux store to add
//to the array of expenses

const AddExpensePage = (props) => {
  //this component contains the Expense form component
  return <div>
    <h1>Add Expense</h1>
    
    <ExpenseForm
      //passing this prop down to the child which is the form
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        //react router has props handed to it in this case we use push to redirect
        props.history.push('/')
      }}
    />
    </div>;
};

export default connect()(AddExpensePage);
