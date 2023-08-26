import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../pages/Contacts/Contacts';
import { Home } from '../pages/Home/Home';
import { LoginPage } from '../pages/Login/Login';
import { RegisterPage } from '../pages/Register/Register';
import { NotFound } from '../pages/NotFound/NotFound';

import { Navigation } from '../components/Navigation/Navigation';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
