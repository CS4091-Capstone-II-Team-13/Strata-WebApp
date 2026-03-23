import { useEffect, useState } from "react";
import Projects from "../services/Projects.ts";
import Navbar from "../components/Navbar.tsx";
import "./App.css";

interface Project {
  name: string;
  description: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const projectHeader = projects ? "Projects" : "No Projects Found";

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("access_token");

      if (!token) {
        console.log("no token");
        return;
      }

      try {
        // const createData = await Projects.createProject(
        //   "Project1",
        //   "Description of project 1",
        // );
        // console.log(createData);
        const data = await Projects.getProjects();

        if (data) {
          setProjects(data);
        }

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    initAuth();
  }, []);

  return (
    <>
      <div className="navbar-container">
        <Navbar></Navbar>
        <div style={{ fontSize: "large" }}>{projectHeader}</div>
        {projects.map((project: Project) => (
          <>
            <div>Project: {project.name}</div>
            <div>Description: {project.description}</div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
