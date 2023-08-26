import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <UserMenuContainer className={style.UserMenuContainer}>
      <StyledLink to="/contacts" className={style.StyledLink}>
        Contacts
      </StyledLink>
      <UserInfo className={style.UserInfo}>Welcome: {user}</UserInfo>
      <UserButton
        className={style.UserButton}
        type="button"
        onClick={handleLogout}
      >
        Logout
      </UserButton>
    </UserMenuContainer>
  );
};
export default UserMenu;
