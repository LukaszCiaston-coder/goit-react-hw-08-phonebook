import styles from './Home.module.css'; // Importuj style CSS

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.homeTitle}>Welcome to Phonebook App</h2>
      <p className={styles.homeText}>
        This is the home page of the Phonebook application.
      </p>
    </div>
  );
};
