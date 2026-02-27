import "./Home.css";

function Home() {
  const projects = [
    "Gym Management System (PHP)",
    "Employee Management System (Java + JDBC)",
    "School Management System (JSP + Servlet)",
    "Spring Boot Car Engine API",
  ];

  return (
    <div className="home">
      <h1>Welcome to My Projects</h1>
      <p>I am Rizwan Ansari - Java Full Stack Developer</p>

      <h2>My Projects</h2>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
