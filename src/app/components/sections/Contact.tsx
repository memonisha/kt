'use client';

import styles from '@/styles/sections/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.section}>
      <h2>Contact</h2>
      <p>You can reach me through the following platforms:</p>
      <ul className={styles.links}>
        <li><a href="mailto:kshitij@email.com">Email</a></li>
        <li><a href="https://scholar.google.com" target="_blank">Google Scholar</a></li>
        <li><a href="https://researchgate.net" target="_blank">ResearchGate</a></li>
        <li><a href="https://grid.ac" target="_blank">GRID</a></li>
      </ul>
    </div>
  );
}
