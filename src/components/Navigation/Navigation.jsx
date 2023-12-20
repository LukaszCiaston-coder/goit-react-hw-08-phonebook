import { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import style from './Navigation.module.css';
import { Loader } from '../Loader/Loader';
import { isUserLogged } from '../../redux/Auth/Selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const userIsLogged = useSelector(isUserLogged);
  const location = useLocation();

  return (
    <div className={style.Container}>
      <nav className={style.Navigation}>
        <Link
          to="/"
          className={`${style.Link} ${
            location.pathname === '/' && style.ActiveLink
          }`}
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>

        {userIsLogged && (
          <div className={style.UserMenuContainer}>
            <UserMenu />
          </div>
        )}
      </nav>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
