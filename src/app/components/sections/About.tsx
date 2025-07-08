'use client';

import styles from '@/styles/sections/about.module.css';
import useInView from '@/hooks/useInView';

export default function About() {
  const { ref, isVisible } = useInView();

  return (
    <div className={styles.section} ref={ref}>
      <h2>About Me</h2>

      <p className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''}`}>
        Hi, I’m Kshitij, a doctoral scholar in the Department of Recreation, Sport, and Tourism at the University of Illinois Urbana-Champaign, where I explore how leisure and recreation spaces can become more inclusive, just, and joyful for everyone. My academic journey has been shaped by a major in RST, a graduate minor in Queer Studies, and ongoing work in Gender Relations in International Development, all of which inform my commitment to equity, LGBTQ+ inclusion, environmental justice, and queer pedagogies.
      </p>

      <p className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''}`}>
        Whether I’m researching or teaching, I care deeply about creating environments where people feel respected, valued, and empowered to engage critically. My classroom philosophy is rooted in participation, empathy, and curiosity — I want students to know they belong.
      </p>

      <p className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''}`}>
        Outside of academia, I stay grounded in community. I volunteer with Urbana Parks District and Books2Prisoners, and serve as a Graduate Student Representative on several committees including the Executive Committee of the Women and Gender in Global Perspectives Program and the Board of Directors for The Academy of Leisure Sciences. I’ve also worked with the DEI and BIPOC committees within the College of Applied Health Sciences to help advance inclusive practices across campus.
      </p>

      <p className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''}`}>
        When I’m not working, you’ll probably find me playing badminton, reading sci-fi and queer literature, or getting involved in local community initiatives. Thanks for stopping by, I hope this space gives you a glimpse into the work I care about and the values that guide me.
      </p>
    </div>
  );
}
