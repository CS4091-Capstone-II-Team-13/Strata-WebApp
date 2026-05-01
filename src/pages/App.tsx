import Navbar from "../components/Navbar.tsx";
import "./App.css";
import { useEffect, useState } from "react";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn.ts";
import { type Project } from "./Repository.tsx";
import Projects from "../services/Projects.ts";
import ProjectList from "../components/ProjectList.tsx";

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
        //   "Project2",
        //   "Description of project 2",
        // );
        // await Projects.createProject(
        //   "Project3",
        //   "Description of project 3",
        // );
        // await Projects.createProject(
        //   "Project4444444444444444444444444444444444444444444444",
        //   "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription of project 3",
        // );
        // await Projects.createProject(
        //   "Proj44444444444444444444444444444444444444",
        //   "",
        // );
        // await Projects.createProject(
        //   "Proj44123123444444444444444444444444444444444444",
        //   "3asdasdadsweqqewqewqwe",
        // );
        // await Projects.createProject(
        //   "Proj44131313123123123123444444444444444444444444444444444444",
        //   "3asdasd3514132adsweqqewqewqwe",
        // );
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
              }}>
              <div
                style={{
                  fontSize: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  borderBottom: "2px solid white",
                  width: "500px",
                  paddingBottom: "8px"
                }}>
                {projectHeader}
              </div>
              <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem"}}>
                <ProjectList projects={projects}></ProjectList>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
