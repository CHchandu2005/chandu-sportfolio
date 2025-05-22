import styles from './HeroStyles.module.css';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';  
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

function Hero() {
  const { theme } = useTheme();
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <motion.div 
        className={styles.colorModeContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/chandu.png"
          className={styles.hero}
          alt="Profile picture"
        />
      </motion.div>
      <motion.div 
        className={styles.info}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>
          Siddartha
          <br />
          Yernagula
        </h1>
        <h2>Full-Stack Web Developer</h2>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="https://twitter.com/" 
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </motion.a>
          <motion.a 
            href="https://github.com/" 
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src={githubIcon} alt="Github icon" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/" 
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </motion.a>
        </motion.span>
        <p className={styles.description}>
          Full stack developer with a passion for building modern web apps for businesses.
        </p>
        <motion.a 
          href={CV} 
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;