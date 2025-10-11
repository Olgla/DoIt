import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          About
        </NavLink>
      </nav>

      <h1 className={styles.title}>{title}</h1>
    </header>
  );
}
