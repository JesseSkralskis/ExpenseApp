// way to iterate through all the expenses objects and get the total added up

export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((sum, value) => sum + value,0);
 
};
