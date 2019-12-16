import React from 'react'
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'


// 1. regular unconnected component

//important to remember if you are connected to the store your component is reactive and will rerender
//now wecan use the state of our store as props in the componenent
 export const ExpenseList=(props) =>{
    return (
        <div>
            {/* for test we creat turneary logic to test if there are no expenses */}
            {
                props.expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (
                     props.expenses.map((expense) => {
              
                //spread out al the things on expense which is all our propertys we are rendering in ListItem
                //now ExpenseList Item has access to every individual instance with all the pairs 
                return <ExpenseListItem key={expense.id}{...expense}/>
           })
               
                )
            }

           
            
        </div>
    )
}

//create higher order component
//using there react-redux api thats why expense list is outside of brackests
//give the component a subset from the store
//passes state into connect
// 2. common practice create a mapping function
const mapStateProps = (state) => {
    return {
        //to get our expenses we now call our selector filter with the needed state
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
//.3 export ties it all together
//saying connect expense list with the props from the higher order function
export default connect(mapStateProps)(ExpenseList);



