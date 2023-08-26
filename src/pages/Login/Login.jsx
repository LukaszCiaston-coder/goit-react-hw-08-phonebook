import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLoged } from '../../redux/Auth/Selectors';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

export const LoginPage = () => {
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
    <div className={styles.loginPageContainer}>
      <h1 className={styles.loginPageTitle}>Login user:</h1>
      <LoginForm />
    </div>
  );
};
