
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
     
      return state.filter(({ id }) => id !== action.id);
    
    

    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
        
    
          return {
            //using spread operators for objects
            //this sais take the existing 
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

export default expensesReducer;