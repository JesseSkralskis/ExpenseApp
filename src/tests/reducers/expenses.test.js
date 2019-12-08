import expensesReducer from '../../reducers/expenses';
import expenses from "../fixtures/expenses"; 

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@' });

    expect(state).toEqual([]);
})