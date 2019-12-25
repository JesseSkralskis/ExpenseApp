import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseTotals from './ExpenseTotals';
import ExpenseListFilters from '../components/ExpenseListFilters';


 
//need to import the named export from redux-react to be able to get the store
//this is the parent of expense list



const DashBoard = () => (
   
    <div>
        <ExpenseTotals/>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)


 
export default DashBoard;