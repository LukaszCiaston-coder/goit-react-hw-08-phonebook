import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.homeTitle}>Welcome to Phonebook App</h2>
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
