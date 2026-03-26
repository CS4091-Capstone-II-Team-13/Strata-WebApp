import Navbar from "../components/Navbar.tsx";
import { Link } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn.ts";
import Projects from "../services/Projects.ts";

interface Project {
  name: string;
  id: string;
  description: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const projectHeader = projects ? "Projects" : "No Projects Found";
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    const initAuth = async () => {
      // if (!isLoggedIn) {
      //   console.log("not logged in");
      //   return;
      // }

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
        {isLoggedIn && (
          <>
            <div style={{ fontSize: "large" }}>{projectHeader}</div>
            {projects.map((project: Project) => (
              <>
                <Link to={`/repository/${project.id}`}>
                  <div>Project: {project.name}</div>
                </Link>
                <div>ID: {project.id}</div>
                <div>Description: {project.description}</div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
