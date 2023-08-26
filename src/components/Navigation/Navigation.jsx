import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './Navigation.module.css';
import { Loader } from '../Loader/Loader';
import { isUserLoged } from '../../redux/Auth/Selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const userIsLogged = useSelector(isUserLoged);

  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <nav>
          <Link to="/" className={style.Link}>
            Home
          </Link>

          {userIsLogged ? (
            <UserMenu />
          ) : (
            <div className={style.RegisterMenuContainer}>
              <Link to="/login" className={style.Link}>
                Login
              </Link>
              <Link to="/register" className={style.Link}>
                Register
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
