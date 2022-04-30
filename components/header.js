import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">Portfolio</Link>
      </div>
    </div>
  );
}

export default Header;
