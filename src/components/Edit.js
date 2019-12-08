import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../actions/expenses";
//take props from route
const Edit = (props) => { 
  console.log(props);
  return (
    <div>
      {/* in this instance of expense form we need to populate the fields so we
      pass some props to the child the expense match
      and what should happen when they push the button */}
      <ExpenseForm
       
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={e => {
          //need to rememberr that the og action function takes in the shorthand object
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};
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
  

  


export default connect(mapToProps)(Edit);


 