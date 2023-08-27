import { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './Navigation.module.css';
import { Loader } from '../Loader/Loader';
import { isUserLoged } from '../../redux/Auth/Selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const userIsLogged = useSelector(isUserLoged);
  const location = useLocation();

  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <nav>
          <Link
            to="/"
            className={`${style.Link} ${
              location.pathname === '/' && style.ActiveLink
            }`}
          >
            🏠 Home
          </Link>

          {userIsLogged ? (
            <UserMenu />
          ) : (
            <div className={style.RegisterMenuContainer}>
              <Link
                to="/login"
                className={`${style.Link} ${
                  location.pathname === '/login' && style.ActiveLink
                }`}
              >
                🔑 Login
              </Link>
              <Link
                to="/register"
                className={`${style.Link} ${
                  location.pathname === '/register' && style.ActiveLink
                }`}
              >
                📝 Register
              </Link>
            </div>
          )}
        </nav>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
