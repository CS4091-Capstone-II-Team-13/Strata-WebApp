import { Link } from "react-router";
import { type Project } from "../pages/Repository";
import "./ProjectList.css";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  return (
    <>
      <div className="projectList-main">
        {projects.map((project: Project) => (
          <>
            <div className="projectList-project-container">
              <Link to={`/repository/${project.id}`} className="plain-link">
                <div className="projectList-name">{project.name}</div>
              </Link>
              <div className="projectList-id">ID: {project.id}</div>
              <div className="projectList-description" style={{ overflowWrap: "break-word" }}>
                {project.description}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ProjectList;
