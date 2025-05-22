import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { motion } from 'framer-motion';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navContent}>
        <motion.h2 
          className={styles.logo}
          whileHover={{ scale: 1.1 }}
        >
          Siddartha
        </motion.h2>
        <div className={styles.links}>
          <motion.a href="#hero" whileHover={{ scale: 1.1 }}>Home</motion.a>
          <motion.a href="#about" whileHover={{ scale: 1.1 }}>About</motion.a>
          <motion.a href="#projects" whileHover={{ scale: 1.1 }}>Projects</motion.a>
          <motion.a href="#experience" whileHover={{ scale: 1.1 }}>Experience</motion.a>
          <motion.a href="#skills" whileHover={{ scale: 1.1 }}>Skills</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.1 }}>Contact</motion.a>
        </div>
        <motion.img
          className={styles.themeToggle}
          src={themeIcon}
          alt="Theme toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;