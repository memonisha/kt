'use client';

import styles from '@/styles/content.module.css';
import About from './About';
import Work from './Work';
import Research from './Research';
import Contact from './Contact';

export default function Content() {
  return (
    <div className={styles.content}>
      <section id="work"><Work /></section>
      <section id="about"><About /></section>
      <section id="research"><Research /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
