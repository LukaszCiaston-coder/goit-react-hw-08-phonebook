import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogged } from '../../redux/Auth/Selectors';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import style from './Login.module.css';
import loginImage from '../../images/login.jpg';

export const LoginPage = () => {
  const userIsLogged = useSelector(isUserLogged);
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
    <div className={style.loginPageContainer}>
      <img className={style.loginImage} src={loginImage} alt="Login" />
      <div className={style.loginFormContainer}>
        <LoginForm />
      </div>
    </div>
  );
};
