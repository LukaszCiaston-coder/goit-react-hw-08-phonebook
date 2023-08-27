import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLoged } from '../../redux/Auth/Selectors';
import { Register } from '../../components/Register/Register';
import styles from './Register.module.css'; // Importuj style CSS

export const RegisterPage = () => {
  const userIsLogged = useSelector(isUserLoged);
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (userIsLogged && !hasRedirected) {
      navigate('/contacts');
      setHasRedirected(true);
    }
    if (!userIsLogged) {
      setHasRedirected(false);
    }
  }, [userIsLogged, navigate, hasRedirected]);

  return (
    <div className={styles.registerPageContainer}>
      <h1 className={styles.registerPageTitle}>REGISTER:</h1>
      <Register />
    </div>
  );
};
