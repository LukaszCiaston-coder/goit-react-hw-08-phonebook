import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/Contacts/Actions';
import styles from './Contacts.module.css'; // Adjust the path accordingly

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(state => state.contacts.isLoading);
  const isError = useSelector(state => state.contacts.error);

  return (
    <div className={styles['contacts-container']}>
      <ContactForm />
      {isLoading && !isError && (
        <p className={styles['loading-message']}>Fetching data...</p>
      )}
      {isError && (
        <p className={styles['error-message']}>Something went wrong</p>
      )}
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
