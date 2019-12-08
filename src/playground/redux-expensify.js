import { createStore, combineReducers } from 'redux'
import React from 'react'
import uuid from 'uuid'

const Redux2 = () => {
//action generators
    
    //ADD_EXPENSE
    const addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {}
    )=>  ( {
        type: "ADD_EXPENSE",
        expenses: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
            
        }
    });
    
    //REMOVE_EXPENSE

    const removeExpense = ({id} = {}) => ({
        type: "REMOVE_EXPENSE",
        expenses: {
            id
            
            
        }
        
    });
    //EDIT_EXPENSE

    const editExpense = (id, updates) => (
        {
        type: "EDIT_EXPENSE",
        id,
        updates

        
    });
    
    
    //SET_TEXT_FILTER

    const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text

    })
    //SORT_BY_DATE

    const sortByDate = () => ({
        type: "SORT_BY_DATE",
       
    });
    //SORT_BY_AMOUNT

    const sortByAmount = () => ({
        type: "SORT_BY_AMOUNT",
       
    });
    //SET_START_DATE

    const setStartDate = (startDate) => ({
        type: "SET_START_DATE",
        startDate
    });
    
    //SET_END_DATE
    const setEndDate = (endDate) => ({
      type: "SET_END_DATE",
      endDate
    });
    
     
//Expenses Reducer
    
    //to simplify default values we creat a variable that reps it

  const expensesReducerDefaultState = [];
    
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
          case "ADD_EXPENSE":
            //use concat because it does not change the array
            //better yet use spread operator
            //meaning it will not effect the original
            return [...state, action.expenses];

          case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.expenses.id);

          case "EDIT_EXPENSE":
            return state.map(expense => {
              if (expense.id === action.id) {
                return {
                  //using spread operators for objects
                  //this sais take the existing expense array
                  //with the id we gave and overwriting the updates we passed in
                  ...expense,
                  ...action.updates
                };
              } else {
                return expense;
              }
            });

          default:
            return state;
        }
    };
    const filterReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined 
    };


    const filterReducer = (state=filterReducerDefaultState, action) => {
        switch (action.type) {
          case "SET_TEXT_FILTER":
            return {
              ...state,
              text: action.text
            };

          case "SORT_BY_DATE":
            return {
              ...state,
              sortBy: "date"
            };

          case "SORT_BY_AMOUNT":
            return {
              ...state,
              sortBy: "amount"
            };

          case "SET_START_DATE":
            return {
              ...state,
              startDate: action.startDate
            };

          case "SET_END_DATE":
            return {
              ...state,
              endDate: action.endDate
            };

          default:
            return state;
        }
    }

    //timestamp (milliseconds)
    // January 1st 1970 (unix epoch) starting point for all time stamps 


    // Get visible expenses 

    const getVisibleExpenses = (expenses, {text, sortBy,startDate, endDate}) => {
        //using filter on the expenses array we will return only an array where our 3 matches are true
        
        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
            
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
               
            return startDateMatch && endDateMatch && textMatch;
            
            
        }).sort((a, b) => {
            console.log(sortBy);
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? -1 : 1; 
            } else if (sortBy === 'amount') {
                return a.amount > b.amount ? -1 : 1;
                
            }
        });
        
    }

    
    //Store creation
    //using combine reducers to register reducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        })
    );


//so we can track state: every time store changes we will get a printout of it
    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        
        console.log(visibleExpenses);
    });
// actual actions calling our aaction generators
    
    
   

    const expense1 = store.dispatch(
        addExpense({  amount: 100, createdAt: 10   }));
    const expense2 = store.dispatch(
      addExpense({ description: "Coffee", amount: 300, createdAt: 1000 })
    );

    // store.dispatch(setTextFilter("rent"));

     

    

    const expense3 = store.dispatch(addExpense({ description: 'ballsack operation', note: 'very long awaited ballsack operation', amount: 4500000, createdAt: 300  }));
  
    // store.dispatch(removeExpense({ id: expense3.expenses.id }))
    
    // store.dispatch(editExpense(expense2.expenses.id,{amount: 500, note : 'this shit went through'}));
  
    // store.dispatch(setTextFilter());
    // store.dispatch(sortByAmount());
    // store.dispatch(sortByDate());
    
    // store.dispatch(setStartDate(0));
    // // // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(1250));

    
    
    
 

//     const demoState = {
//         //create 2 reducers one that handles expenses the other that handles filters
//         expenses: [{
//             id: 'dsfjhaihaihdi',
//             description: 'Jan Rent',
//             note: 'This was my final rent payement for this address',
//             amount: 54500,
//             createdAt: 0,
//         }],
//         filters: {
//             text: 'rent',
//             sortBy: 'amount', //date or amount
//             startDate: undefined,
//             endDate: undefined
//         }

       
// };
  return null;
    
}

const user = {
    name: "jon", 
    age: 23
}

//spread operator for objects
// console.log({
//     //add new paramaters
//     //or overwritw existing ones
//     ...user,
//     location: 'phily',
//     age: 10
// });
 
export default Redux2;



