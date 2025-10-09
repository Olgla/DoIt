import styles from '../styles/App.module.css';

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <h2>About This App</h2>
      <p>
        Simple Todo app saves the tasks to Airtable. Done todos are hidden in UI
      </p>
    </div>
  );
}
