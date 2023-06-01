
export const customers = {
    state: {
      listCustomers: [],
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setListCustomers(state, listCustomers) {
        return {
          ...state,
          listCustomers,
        };
      },
      deleteUser(state, listCustomers, record) {
        return {
          ...state,
          listCustomers: state.listCustomers.filter((user) => user.id !== record.id),
        };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      
      }),
    
  };
  