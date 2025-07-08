'use client';

import Sidebar from '@/app/components/sections/Sidebar';
import Content from '@/app/components/sections/Content';
import styles from '@/styles/layout.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <Content />
    </main>
  );
}
