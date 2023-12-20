import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getfilteredContacts } from '../../redux/Contacts/Selectors';
import styles from './ContactList.module.css';

export const ContactList = ({ children }) => {
  const filteredContacts = useSelector(getfilteredContacts);

  return (
    <div className={styles.list}>
      <h2>Your contacts</h2>
      {children}
      <ul>
        {filteredContacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
};
