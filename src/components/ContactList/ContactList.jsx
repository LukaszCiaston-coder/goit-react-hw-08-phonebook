import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Features/ContactSlice';
import styles from './ContactList.module.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';

const ContactListItem = ({ contact, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteClick = () => {
    onDelete(contact.id);
    handleCloseModal();
  };

  return (
    <li key={contact.id} className={styles.contactItem}>
      <span className={styles.contactName}>{contact.name}</span>
      <span className={styles.contactPhone}>{contact.phone}</span>
      <button className={styles.deleteButton} onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className={styles.modal}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>Contact Details</div>
          <div className={styles.modalBody}>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
          </div>
          <div className={styles.modalFooter}>
            <button className={styles.modalButton} onClick={handleCloseModal}>
              Close
            </button>
            <button className={styles.modalButton} onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </li>
  );
};

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = async contactId => {
    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
