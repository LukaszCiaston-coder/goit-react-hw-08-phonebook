// ContactList.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getfilteredContacts } from '../../redux/Contacts/Selectors';
import Contact from '../Contact/Contact';
import Pagination from '../Pagination/Pagination';
import styles from './ContactList.module.css';

export const ContactList = ({ children }) => {
  const filteredContacts = useSelector(getfilteredContacts);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.list}>
      <h2>Your contacts</h2>
      {children}
      <ul>
        {currentContacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
      <Pagination
        contactsPerPage={contactsPerPage}
        totalContacts={filteredContacts.length}
        paginate={paginate}
      />
    </div>
  );
};
