const programmingLanguages = [
  "💻 C",
  "☕ Java",
  "🐍 Python",
];

const webTechnologies = [
  "🌐 HTML",
  "🎨 CSS",
];

const coreSkills = [
  "📚 Data Structures & Algorithms",
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-container">
          {programmingLanguages.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Web Technologies</h3>
        <div className="skills-container">
          {webTechnologies.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Core Concepts</h3>
        <div className="skills-container">
          {coreSkills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;