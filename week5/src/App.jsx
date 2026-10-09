
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Website</h1>
      <h2>Shravani Kamsani</h2>

      <p>
        B.Tech 3rd Year | CSE (AI & ML)
      </p>

      <p>
        Welcome to my React Router website.
        This is my Week 5 React experiment.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>

      <p>
        I am Shravani Kamsani, a B.Tech 3rd-year
        Computer Science and Engineering student
        specializing in Artificial Intelligence and
        Machine Learning at Chaitanya Bharathi
        Institute of Technology, Hyderabad.
      </p>

      <p>Branch: CSE (AI & ML)</p>
      <p>College: CBIT, Hyderabad</p>

      <h3>My Interests</h3>
      <p>
        Artificial Intelligence, Machine Learning,
        Deep Learning, Web Development and DSA.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>

      <p>Name: Shravani Kamsani</p>

      <p>
        CSE (AI & ML) Student |
        AI/ML Enthusiast |
        Software Development Learner
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub
        </a>
      </p>

      <p>
        Interested in internships, technical projects
        and software development opportunities.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Shravani's React Site</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
