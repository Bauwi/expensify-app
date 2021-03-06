import uuid from 'uuid'
import database from '../firebase/firebase';


// ACTION GENERATORS
    // ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0 
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

    // REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const reference = `users/${uid}/expenses/${id}`
    return database.ref(reference).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  }
}

    // EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const reference = `users/${uid}/expenses/${id}`
    return database.ref(reference).update(updates)
      .then( () => {
        dispatch(editExpense(id, updates));
    });
  };
};


    // SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  // Manage async using thunk
  return (dispatch, getState) => {
    //fetch data in 'expenses'
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`)
      .once('value')
      // then parse data in an array
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        // finally, use the parsed data in a dispatch call to update state
        dispatch(setExpenses(expenses));
      });
  };
};
