import { createStore } from 'redux';

//
// ACTION GENERATORS
//
// Destructuring arg --- Arg obj is defaulted to empty. If obj,
// incrementBy is defaulted to 1
// Implicitely returns an obj
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  // i.e incrementBy: incrementBy
  incrementBy               
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count } = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

//==============================================================//
//
//REDUCERS
//
//Its job is to specify how the application's state changes 
//in response to actions
//1. Reducers are pure functions! i.e. Output is only determined by
    // arguments that get passed in.
    //Not pure functions : 

    // let a = 10;
    // const add = b => a + b;  
    // Non-pure because output is not only determined by arguments that
    //are passed in

    // let result;
    // const add = ( a, b ) => {
    //   result = a + b;
    // }
    // Non-pure because function is interacting with things 
    //outside of its scope

    // Pure function : 
    // const add = (a, b) => a + b;
  
  //2. NEVER change state or action!

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default: 
      return state; 
  }
}


//==============================================================//
// STORE
//
const store = createStore(countReducer);


//
//
//
//
//
//

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 18 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount());

store.dispatch(setCount({ count: 20}));

store.dispatch(resetCount());