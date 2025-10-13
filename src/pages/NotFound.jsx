import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';

export default function NotFound() {
  return (
    <div className={styles.pageContainer}>
      <h2>Page Not Found</h2>
      <p>{`Oops! The page you're looking for doesn't exist.`}</p>
      <Link to="/">Home</Link>
    </div>
  );
}
