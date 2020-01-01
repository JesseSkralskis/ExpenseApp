// Action Generator does

//1.component calls action generator
//2.action generator returns object
//3.component dispathes object
//4. redux stores the changes

//with asynchrounous behaives differently
//1. component calls action generator
//2. action generator returns a function
//3. component dispatches function
//4. function runs(and has ability to dispatch other actions or do whatever it wants)


import uuid from 'uuid'
import database from '../firebase/firebase';

//ADD_EXPENSE
//use named export
export const addExpense = (expenses) => ({
  type: "ADD_EXPENSE",
  expenses
  });

 

  

 

//REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => {


  
  return {
 
    type: "REMOVE_EXPENSE",
    id
  };
};
//EDIT_EXPENSE

export const editExpense = ({ id }, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET_EXPENSES
const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

 //function for firebase
  //instaed of returning an object we return a function
  //only works because we set up the middleware for redux thunk
  
export const startAddExpense = (expenseData = {}) => {
  
  return (dispatch) => {
    //better way to structure the
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
        }))
      })
  };
};

export const startRemoveExpense = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(snapshot => {
        dispatch(removeExpense({ id }));
      });
  };
};


export const startSetExpenses = () => {
  //fetch all expense data once
  //parse that data into an array
  //Dispatch SET_EXPENSES

  return (dispatch) => {
    return database.ref('expenses').once('value')
      .then((snapshot) => {
         
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        console.log(expenses);
        dispatch(setExpenses(expenses));
      });
  }

  

}
