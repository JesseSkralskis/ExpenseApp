import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total'
import { connect } from "react-redux";
import numeral from "numeral";

export const ExpenseTotals = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal/100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {formattedTotal}</h1>
        </div>
    )
}
// here I use the selector to get all the visible expenses
//nthen I pass the props objects up 
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
   
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpenseTotal(visibleExpenses)
        
    }

}

export default connect(mapStateToProps)(ExpenseTotals);