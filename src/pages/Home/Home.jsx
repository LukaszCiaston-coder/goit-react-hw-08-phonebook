import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.homeTitle}>Welcome to Phonebook App</h2>
          <p className={styles.homeDescription}>
            The Phonebook App is a simple and user-friendly application for
            managing your contacts. With this app, you can easily add new
            contacts, delate existing ones, and filter your contacts by name. It
            provides a seamless user experience, allowing you to keep track of
            your important contacts in one central location.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/register" className={styles.registerButton}>
              Register
            </Link>
            <Link to="/login" className={styles.loginButton}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
