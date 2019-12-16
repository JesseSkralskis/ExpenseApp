import expensesReducer from '../../reducers/expenses';
import expenses from "../fixtures/expenses"; 

test('should set default state', () => {
    
    const state = expensesReducer(undefined, { type: '@@' });

    expect(state).toEqual([]);
})
test('should delete  expense by id', () => {
    
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
   
})

test("should not delete if id not found", () => {
 
  const action = {
    type: "REMOVE_EXPENSE",
    id: 'abc'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const expense = {
      id: "78",
      description: "mfijnreijn",
      note: "",
      amount: 195,
      createdAt: 0
    }; 

    const action = {
        type: "ADD_EXPENSE",
        expenses: expense
    };

  
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {

    const amount = 3434;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    
    
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test("should not edit if no id found", () => {
    const amount = 50000;
    const action = {
        type: "EDIT_EXPENSE",
        id: 'rando',
        updates: { amount }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});



 
