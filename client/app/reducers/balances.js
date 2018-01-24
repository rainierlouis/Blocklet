const defaultState = {
  balances: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_BALANCES':
     return {
      ...state,
      balances: action.data
     };
    case 'SET_BALANCES':
      return action.balances;
    default:
      return state;
  }
}
