import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h1 className="sectionTitle">About Me</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Coding workspace" 
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textContent}>
          <p>
            Hi there! I'm Chandu Chintalapudi, a passionate Full-Stack Developer with a keen interest in building modern, responsive, and user-friendly web applications. With expertise in both front-end and back-end technologies, I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a professional career where I get to create meaningful digital experiences every day. I specialize in JavaScript/TypeScript ecosystem, working with modern frameworks and tools to deliver high-quality software solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community through blog posts and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;