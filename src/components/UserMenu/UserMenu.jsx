import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logOut } from '../../redux/Auth/Actions';
import { userName } from '../../redux/Auth/Selectors';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div className={style.UserMenuContainer}>
      <Link to="/contacts" className={style.StyledLink}>
        Contacts
      </Link>
      <div className={style.UserInfo}>Welcome: {user}</div>
      <button className={style.UserButton} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
