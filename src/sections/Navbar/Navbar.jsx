import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.themeToggle}>
          <img
            src={themeIcon}
            alt="Theme toggle"
            onClick={toggleTheme}
            className="hover"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;