import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogged } from '../../redux/Auth/Selectors';
import { Register } from '../../components/Register/RegisterPage';
import registerImage from '../../images/login.jpg';
import style from './RegisterPage.module.css';

export const RegisterPage = () => {
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
    <div className={style.registerPageContainer}>
      <img className={style.registerImage} src={registerImage} alt="Register" />
      <div className={style.registerFormContainer}>
        <Register />
      </div>
    </div>
  );
};
