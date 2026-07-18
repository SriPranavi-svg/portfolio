const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, education, and contact information with a modern user interface.",
    tech: "React, CSS, JavaScript",
  },
  {
    title: "Student Management System",
    description:
      "A web application to manage student records with CRUD operations.",
    tech: "Java, MySQL",
  },
  {
    title: "Savings Vault Tracker",
    description:
      "A savings tracking application with blockchain-based concepts.",
    tech: "Python, Flask",
  },
];
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;