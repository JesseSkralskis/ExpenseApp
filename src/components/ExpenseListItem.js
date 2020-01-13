import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

//this takes the props from expenseList (destructerted) and placesd them as needed
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 classsName="list-item__title">{description}</h3>
      <p className="list-item__subtitle"> {moment(createdAt).format("MMMM Do, YYYY ")}</p>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format("$0,0.00")}</h3>
  </Link>
);
//when we add connect we get dispatch as a prop even if we do no mapToProps function
export default ExpenseListItem;
