import styles from './Header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <h1>Travel Agency</h1>
      <nav className={styles.nav}>
        <a href="#">Acceuil</a>
        <a href="#">Destinations</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
export default Header