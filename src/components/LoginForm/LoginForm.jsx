import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div
        className={`${styles.loginInputContainer} ${
          isEmailFocused ? styles.focused : ''
        }`}
      >
        <FontAwesomeIcon icon={faEnvelope} className={styles.loginIcon} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
      </div>
      <div
        className={`${styles.loginInputContainer} ${
          isPasswordFocused ? styles.focused : ''
        }`}
      >
        <FontAwesomeIcon icon={faLock} className={styles.loginIcon} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
      </div>
      <button className={styles.loginButton} type="submit">
        Log In
      </button>
      <Link to="/register" className={styles.toRegister}>
        To register
      </Link>
    </form>
  );
};
