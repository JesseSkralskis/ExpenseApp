import React from 'react'
import { NavLink } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';

 



//this takes the props from expenseList (destructerted) and placesd them as needed
const ExpenseListItem = ({  id, description, amount, createdAt }) => (
  <div>
    <NavLink to={`/edit/${id}`}>
      {" "}
      <h3>{description}</h3>
    </NavLink>
    <p>
      {numeral(amount/100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY ')}
    </p>
    
  </div>
);
   //when we add connect we get dispatch as a prop even if we do no mapToProps function
    export default ExpenseListItem;