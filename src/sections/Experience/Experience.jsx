import styles from './ExperienceStyles.module.css';

function Experience() {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      description: "Leading development of enterprise-scale web applications, mentoring junior developers, and implementing best practices."
    },
    {
      period: "2020 - 2022",
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained multiple client projects using React, Node.js, and AWS infrastructure."
    },
    {
      period: "2018 - 2020",
      role: "Frontend Developer",
      company: "Creative Web Agency",
      description: "Created responsive web applications and implemented UI/UX designs using modern frontend technologies."
    },
    {
      period: "2017 - 2018",
      role: "Junior Developer",
      company: "StartUp Hub",
      description: "Worked on various startup projects, gaining experience in full-stack development and agile methodologies."
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <span className={styles.date}>{exp.period}</span>
              <h3 className={styles.title}>{exp.role}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;