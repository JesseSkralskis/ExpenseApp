import React, { Component } from 'react';
//needed to make react-dates work
import "react-dates/initialize";
//named export from the react dates library
import uuid from 'uuid';
import database from '../firebase/firebase'
import { SingleDatePicker } from 'react-dates';

//for docu go to https://github.com/airbnb/react-dates
//tools used to manipulate date:
//1.moment 2. air b and b react-dates
import moment from 'moment';
 //api for this javascript way is dog shit so its a no go
// const date = new Date();
//so we use moment
//for documentation on patterns go to
//https://momentjs.com/docs/#/displaying/
const now = moment();




export default class ExpenseForm extends Component {
                 //we need local compomnent state to track all of the changes in these inputs
                 //only when the user submits the form will we actually do something with the info
  constructor(props) {
    super(props);
   
    this.state = {
      //because we want to populate the fields if the user has chosen to edit
      //we use turnerary logic that checks if the expense object has been passed from the parent
      //if it has it means the user is editing so will populate
      
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
    //divide by 100 so the field holds the proper decimal situation
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      //to poopulate the correct date we call moment with the created at paramater
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ""
    };
  }
             
                 //create an event handler function
                 handleDescriptionChange = e => {
                   const description = e.target.value;
                   this.setState(() => ({
                     description
                   }));
                 };
                 handleNoteChange = e => {
                   const note = e.target.value;
                   this.setState(() => ({
                     note
                   }));
                 };

    onAmountChange = e => {
                   const amount = e.target.value;
                   //function that adds restrictions to inputs by checking if input value matches
                   //regex expression
                   if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                     this.setState(() => ({
                       amount
                     }));
                   } else {
                   }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({
            calenderFocused: focused
        }));
    }
    
    
    
    
  handleDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  }
  
  handleOnSubmit = (e) => {
    //on submit need to do this so page doesnt do full refresh handles with just javascript
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'you need to fill out the description or amount field'
      }))
      
    } else {
      this.setState(() => ({
        error: ""
      }));
      //calling the function that was passed from parent with the object from all the state from this child component
      this.props.onSubmit({
        
        description: this.state.description,
        //because amount is in string form we must parse it also multiply by 100 
        //so we can negate that it is in cents
        amount: parseFloat(this.state.amount, 10) * 100,
        //because the state is set to moment we need to parse this back to its og form
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
        

      })
    }
    
  }
                 render() {
                   return (
                     <form className="form" onSubmit={this.handleOnSubmit}>
                       {this.state.error && (
                         <p className="form__error">{this.state.error}</p>
                       )}
                       <input
                         className="text-input"
                         type="text"
                         placeholder="description"
                         //automatically places the cursor on this input
                         autoFocus
                         value={this.state.description}
                         onChange={this.handleDescriptionChange}
                       />
                       {/* becuse type number allows many decimalplaces we must use text */}
                       <input
                         className="text-input"
                         type="text"
                         placeholder="amount"
                         value={this.state.amount}
                         onChange={this.onAmountChange}
                       />

                       <SingleDatePicker
                         date={this.state.createdAt}
                         //similr to other event handlers but difference is
                         //this one is called by our third party library
                         onDateChange={this.handleDateChange}
                         focused={this.state.calenderFocused}
                         onFocusChange={this.onFocusChange}
                         //custumization
                         //docu https://github.com/airbnb/react-dates
                         numberOfMonths={1}
                         isOutsideRange={() => {
                           return false;
                         }}
                       />

                       <textarea
                         className="text-area"
                         placeholder="add a note for your expense (optional)"
                         value={this.state.note}
                         onChange={this.handleNoteChange}
                       />
                       <div>
                         <button value="ballsack" className="buttons">{window.location.href.indexOf('edit')> -1 ?"Edit Expense": "Add expense"}</button>
                       </div>
                     </form>
                   );
                 }
               }
