export const getContacts = state => state.contacts.contacts;

export const getfilteredContacts = store => {
  const contacts = getContacts(store);
  const { filter } = store;

  if (!filter || filter === null || filter === undefined) {
    return contacts;
  }

  const normalizedFilter = String(filter).toLowerCase().trim();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};
