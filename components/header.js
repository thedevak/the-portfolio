import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">Portfolio</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
