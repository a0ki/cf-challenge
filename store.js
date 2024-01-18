import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  session: {
    first_name: null,
    last_name: null,
    email: null,
    password: null,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER':
      return { ...state, session: { ...state.session, ...action.payload } };
    case 'LOGIN':
      return { ...state, session: { ...state.session, ...action.payload } };
    case 'LOGOUT':
      return { ...state, session: null };
    default:
      return state;
  }
}

const store = configureStore({
  reducer
});

export default store;