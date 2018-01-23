const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_BALANCES':
      return action.balances;
    default:
      return state;
  }
}
