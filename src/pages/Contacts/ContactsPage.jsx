import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/Contacts/Actions';
import { Loader } from '../../components/Loader/Loader';
import style from './ContactsPage.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(state => state.contacts.isLoading);
  const isError = useSelector(state => state.contacts.error);

  return (
    <div className={style.contactsContainer}>
      <ContactForm />
      {isLoading && !isError && <Loader />}{' '}
      {isError && <p className={style.errorMessage}>Something went wrong</p>}
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
