import "./Home.css";

function Home() {
  const projects = [
    "Todo List",
    "Text Analizer",
    "Share Calculation",
    "Ticket Booking",
  ];

  return (
    <div className="home">
      <h1>Welcome to My Projects</h1>
      <p>I am Rizwan Ansari - Full Stack Developer</p>

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
