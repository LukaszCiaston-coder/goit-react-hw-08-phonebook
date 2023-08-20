import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../Features/ContactSlice';
import styles from './ContactForm.module.css';
import { selectContactByPhone } from '../Features/ContactSlice';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const isDuplicatePhone = useSelector(selectContactByPhone);

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangePhone = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (isDuplicatePhone(phone)) {
      Notiflix.Notify.failure('Contact with this phone number already exists.');
      return;
    }

    try {
      await dispatch(addContact({ name, phone }));
      setName('');
      setPhone('');
      Notiflix.Notify.success('Contact added successfully.');
    } catch (error) {
      console.error('Error adding contact:', error);
      Notiflix.Notify.failure('Error adding contact. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.labelContainer}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeName}
          className={styles.input}
        />
      </div>
      <div className={styles.labelContainer}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
