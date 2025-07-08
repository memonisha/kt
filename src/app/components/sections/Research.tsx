'use client';

import styles from '@/styles/sections/research.module.css';

const tags = [
  "Environmental Justice",
  "LGBTQ+ Inclusion",
  "Queer Pedagogies",
  "Equity in Recreation",
  "Community-based Research"
];

export default function Research() {
  return (
    <div className={styles.section}>
      <h2>Research Interests</h2>
      <ul className={styles.tagList}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
