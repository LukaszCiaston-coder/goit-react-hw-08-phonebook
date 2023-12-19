import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={styles.registerForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className={styles.registerInputContainer}>
        <FontAwesomeIcon icon={faUser} className={styles.registerIcon} />
        <input type="text" name="name" placeholder="Username" />
      </div>
      <div className={styles.registerInputContainer}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.registerIcon} />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className={styles.registerInputContainer}>
        <FontAwesomeIcon icon={faLock} className={styles.registerIcon} />
        <input type="password" name="password" placeholder="Password" />
      </div>
      <button className={styles.registerButton} type="submit">
        Register
      </button>
      <Link to="/login" className={styles.toLogin}>
        Already have an account? Log In
      </Link>
    </form>
  );
};
