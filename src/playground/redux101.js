import React from 'react';
import { createStore } from 'redux'

//action generators - function that return action abjects
//when we are impicitly returning we must wrap object in parantheses
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
    
})

const decrementCount = ({decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
    
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})
//Reducers
 
const Redux = () => {
                      //creating a redux store
                      //first argument is the current state can set the default by using the =
                      //second argument is the action

                      //Reducers
                    //1. Reducers are pure functions meaning output is dependant on the input
                    //2.never change state or action  

                      const countReducer = (state = { count: 0 }, action) => {
                        //most common to use switch

                        switch (action.type) {
                          case "INCREMENT":
                            //turnary way to say if the action.incrementBy is
                            // a number than increment by that number else just incrrement by one.

                            //because now we have an an action generator we no longre need this
                            //   const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
                            return {
                              //and instead call it here
                              count: state.count + action.incrementBy
                            };

                          case "DECREMENT":
                            return {
                              count: state.count - action.decrementBy
                            };
                          //if you want to force the case to be  certain count then whatever it was set to will be called
                          case "SET":
                            return {
                              count: action.count
                            };

                          case "RESET":
                            return { count: 0 };

                          default:
                            return state;
                        }
                      };

                      const store = createStore(countReducer);

                      //how to know when state is changed
                      //function gets called everty time the store gets changed;
                      //   store.subscribe(() => {
                      //     console.log(store.getState());
                      //   });

                      //how to unsubscribe then call it in the switch
                      //because the return value of subscribe is actually unsubscribe then you
                      //can just set subscribe to a variable and then call it whenever needed
                      const unsubscribe = store.subscribe(() => {
                        console.log(store.getState());
                      });
                      //how to fetch the current state using getState();

                      //actions

                      //actions are an Object that gets sent to the store;
                      // increment, decrement,reset

                      //id like to increment the count
                      //dynamic actions passed in on the second line
                      //   store.dispatch({
                      //       type: "INCREMENT",
                      //       incrementBy: 5
                      //   });

                      store.dispatch(incrementCount({ incrementBy: 5 }));
                      //then call it here to unsubscribe
                      // unsubscribe()
                      store.dispatch(incrementCount());
                      store.dispatch(incrementCount());
                      //dynamic actions passed in
                      //   store.dispatch({
                      //       type: "DECREMENT",
                      //       decrementBy: 10
                      //   });

                      store.dispatch(decrementCount({ decrementBy: 10 }));

                      // id like to reset the count

                      //   store.dispatch({
                      //     type: "RESET"
                      //   });

                      store.dispatch(resetCount());

                      //can also make actions with required types
                      // store.dispatch({
                      //     type: 'SET',
                      //     count: 101

                      // })

                      store.dispatch(setCount({ count: 101 }));

                      return <div>yo</div>;
                    }
 
export default Redux;