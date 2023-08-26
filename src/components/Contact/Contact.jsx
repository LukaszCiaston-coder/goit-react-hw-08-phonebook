import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/Actions';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={styles.contact}>
      <span className={styles.contactInfo}>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
