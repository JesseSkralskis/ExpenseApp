import { removeExpense, editExpense, addExpense } from '../../actions/expenses';
// use toEqual when the comparing objects
// use expect.any when you have a random value coming just need to name the type of
test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    
    id: '123abc'
    
  });
});

test("should return the correct edit expense object", () => {
  const action = editExpense({ id: 'abc123' }, {
        description: 'balls',
        note:'yo'
    });
 
    expect(action).toEqual({
      type: "EDIT_EXPENSE", 
      id:'abc123',
        updates:
        {
            description: 'balls',
            note: 'yo'
        }
    });
})

test('should return added expense', () => {
    const action = addExpense({
        description: 'balls',
        note: 'yo',
        amount: 23,
        createdAt: 34
    });
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expenses: {
       id: expect.any(String),
        description: "balls",
        note: "yo",
        amount: 23,
        createdAt: 34
      }
    });
})

test('should return default add expense value object', () => {
    const action = addExpense({});

    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expenses: {
        id: expect.any(String),
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
      }
    });
})