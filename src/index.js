import ReactDOM from "react-dom";
import React from 'react';
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import Redux2 from './playground/redux-expensify';
import configStore from "../src/store/configStore";
import { addExpense } from "../src/actions/expenses";
import { setTextFilter } from "../src/actions/filters";
import getVisibleExpenses from "../src/selectors/expenses";

//provider allows us to provide the redux store to all our components
import { Provider } from 'react-redux';

//call to the export default function gives us access to the store

const store = configStore();

store.dispatch(addExpense({ description: "water bill",amount:150,createdAt:4500 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 300, createdAt: 1000 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 450, createdAt: 1095000 })
);


const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);
 



const jsx = (

    // by using this now all applications wwill have access to the store
    <Provider store={store} >
        <App/>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
