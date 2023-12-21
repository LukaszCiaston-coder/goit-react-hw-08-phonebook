import { DotLoader } from 'react-spinners';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <DotLoader color="#007bff" size={40} />
    </div>
  );
};
