const initialState = {
 articles: []
};

// REDUCER
const newsReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_ARTS':
   return {
    ...state,
    articles: action.data
   };
  default:
   return state;
 }
};

export default newsReducers;
