import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../Features/ContactSlice';
import filterReducer from '../Features/FilterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
