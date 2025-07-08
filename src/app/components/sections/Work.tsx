'use client';

import styles from '@/styles/sections/work.module.css';
import Image from 'next/image';

export default function Work() {
  return (
    <div className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/project1.jpg" alt="Project 1" width={300} height={200} />
          <div className={styles.overlay}>
            <p>Queer Pedagogies in Leisure Studies – A Participatory Framework</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/project2.jpg" alt="Project 2" width={300} height={200} />
          <div className={styles.overlay}>
            <p>LGBTQ+ Inclusion in Urban Parks: A Community Perspective</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/project3.jpg" alt="Project 3" width={300} height={200} />
          <div className={styles.overlay}>
            <p>Environmental Justice in Recreation: Case Studies from Urbana</p>
          </div>
        </div>
      </div>
    </div>
  );
}
