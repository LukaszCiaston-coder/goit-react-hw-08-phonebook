import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import { addContact } from '../../redux/Contacts/Actions';
import { getContacts } from '../../redux/Contacts/Selectors';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const numberInputRef = useRef();

  const isInContacts = (name, number) => {
    const normalizedName = name.toLowerCase().trim();
    const normalizedNumber = number.toLowerCase().trim();

    return contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === normalizedName ||
        contact.number.toLowerCase().trim() === normalizedNumber
    );
  };

  const isDataPatternValid = (name, number) => {
    const namePattern = new RegExp(nameInputRef.current.pattern);
    const numberPattern = new RegExp(numberInputRef.current.pattern);

    const isNameValid = namePattern.test(name);
    const isNumberValid = numberPattern.test(number);

    let errorMessage = '';
    if (!isNameValid) {
      errorMessage += 'Invalid name input. ';
    }
    if (!isNumberValid) {
      errorMessage += 'Invalid number input.';
    }
    if (errorMessage) {
      return errorMessage;
    }
  };

  const handlesubmit = event => {
    const form = event.target;
    event.preventDefault();
    const nameValue = event.target.elements.name.value;
    const numberValue = event.target.elements.number.value;

    const errorMessage = isDataPatternValid(nameValue, numberValue);
    if (errorMessage) {
      return alert(errorMessage);
    }

    if (isInContacts(nameValue, numberValue)) {
      return alert(`${nameValue} already in contacts`);
    }

    dispatch(addContact({ name: nameValue, number: numberValue }));
    form.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handlesubmit} className={styles.contact}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+( [a-zA-Z]+)?$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Type name as John Doe"
          ref={nameInputRef}
        />
        <span>Number:</span>
        <input
          type="tel"
          name="number"
          pattern="^\d{1,3}([- ]?\d{1,3}){2,3}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Type number as 000-00-00"
          ref={numberInputRef}
        />
        <button type="submit" className={styles.contact__button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
