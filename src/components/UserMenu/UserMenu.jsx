import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { logOut } from '../../redux/Auth/Actions';
import { userEmail } from '../../redux/Auth/Selectors';
import style from './UserMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faSignOutAlt,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const UserMenu = () => {
  const email = useSelector(userEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={style.UserMenuContainer}>
      <Link
        to="/contacts"
        className={`${style.Link} ${
          location.pathname === '/contacts' && style.ActiveLink
        }`}
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </Link>
      <div className={style.UserMenu}>
        <div className={style.UserInfo} onClick={handleModalToggle}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        {isModalOpen && (
          <div className={style.Modal}>
            <div className={style.ModalClose} onClick={handleModalToggle}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <p>Email: {email}</p>
            <button className={style.logoutButton} onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
