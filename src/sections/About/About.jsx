import styles from './AboutStyles.module.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.h1 
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className={styles.content}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/chandu.png" 
            alt="Profile picture" 
            className={styles.aboutImage}
          />
        </motion.div>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.description}>
            <p>
              Hi there! I'm a passionate Full-Stack Developer with a keen interest in building modern, responsive, and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>
          <div className={styles.personalInfo}>
            <h3>Personal Information</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span>Name:</span>
                <p>Siddartha Yernagula</p>
              </div>
              <div className={styles.infoItem}>
                <span>Age:</span>
                <p>19 years (20-05-2005)</p>
              </div>
              <div className={styles.infoItem}>
                <span>Nationality:</span>
                <p>Indian</p>
              </div>
              <div className={styles.infoItem}>
                <span>Address:</span>
                <p>6-1-102 I.J Naidu Colony, Amadalavalsa, Srikakulam, 532185</p>
              </div>
              <div className={styles.infoItem}>
                <span>Education:</span>
                <p>Btech-CSE</p>
              </div>
              <div className={styles.infoItem}>
                <span>College:</span>
                <p>Rajiv Gandhi University of Knowledge and Technologies Nuzvid</p>
              </div>
              <div className={styles.infoItem}>
                <span>Email:</span>
                <p>codewithsiddu@gmail.com</p>
              </div>
              <div className={styles.infoItem}>
                <span>Contact:</span>
                <p>+91 93988 48215</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;