import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

function Projects() {
  const projects = [
    {
      title: "Viberr",
      description: "A modern music streaming platform built with React and Node.js. Features include user authentication, playlist creation, and real-time audio streaming.",
      image: viberr,
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      liveDemo: "https://viberr-demo.netlify.app",
      github: "https://github.com/username/viberr"
    },
    {
      title: "Fresh Burger",
      description: "An online food ordering system for a burger restaurant. Includes menu management, cart functionality, and order tracking.",
      image: freshBurger,
      tech: ["React", "Firebase", "Stripe", "Tailwind"],
      liveDemo: "https://freshburger-demo.netlify.app",
      github: "https://github.com/username/fresh-burger"
    },
    {
      title: "Hipsster",
      description: "E-commerce platform for a glasses shop with virtual try-on feature using AR technology.",
      image: hipsster,
      tech: ["Vue.js", "Three.js", "Express", "PostgreSQL"],
      liveDemo: "https://hipsster-demo.netlify.app",
      github: "https://github.com/username/hipsster"
    },
    {
      title: "FitLift",
      description: "Fitness tracking application with workout planning, progress monitoring, and social features.",
      image: fitLift,
      tech: ["React Native", "Redux", "Node.js", "MongoDB"],
      liveDemo: "https://fitlift-demo.netlify.app",
      github: "https://github.com/username/fitlift"
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.button}>Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.button}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;