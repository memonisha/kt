'use client';

import styles from '@/styles/sidebar.module.css';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <Image
          src="/profile.jpg" // Make sure this image exists in your `public/` folder
          alt="Kshitij Tewari"
          width={175}
          height={190}
          className={styles.avatar}
        />
        <h1 className={styles.name}>Kshitij Tewari</h1>
        <p className={styles.tagline}>
          Doctoral Scholar<br />
          Environmental Justice & Queer Pedagogies
        </p>
      </div>
      <nav className={styles.nav}>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
}
