import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const selectContacts = state => state.contacts;

export const selectContactByPhone = createSelector(
  [selectContacts],
  contacts => phone => contacts.some(contact => contact.phone === phone)
);
const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get(
    'https://64db8143593f57e435b10ecb.mockapi.io/contacts'
  );

  return response.data;
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const response = await axios.post(
    'https://64db8143593f57e435b10ecb.mockapi.io/contacts',
    contact
  );
  return response.data;
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(
      `https://64db8143593f57e435b10ecb.mockapi.io/contacts/${contactId}`
    );
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export { fetchContacts, addContact, deleteContact };

export default contactsSlice.reducer;
