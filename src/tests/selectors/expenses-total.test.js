import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0)
})

test("should corectly add up on expense", () => {
  const res = selectExpenseTotal([expenses[0]]);
  expect(res).toBe(expenses[0].amount);
});

test("should corectly add up more than one expense on expense", () => {
    const res = selectExpenseTotal(expenses);
    expect(res).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});