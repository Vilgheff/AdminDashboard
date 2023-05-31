export const users = {
  state: {
    listUsers: [],
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListUsers(state, listUsers) {
      return {
        ...state,
        listUsers,
      };
    },
    deleteUser(state, listUsers, record) {
      return {
        ...state,
        listUsers: state.listUsers.filter((user) => user.id !== record.id),
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async fetchUsers(payload, rootState) {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      console.log(data);
      this.setListUsers(data);
    },
  }),
};
