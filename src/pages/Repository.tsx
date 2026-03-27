// import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import { useParams, Link } from "react-router";
import "./Repository.css";
import { useState, useEffect } from "react";
import Projects from "../services/Projects.ts";
import { getRelativeTime } from "../utils/utils.ts";

export interface Project {
  id: string;
  name: string;
  description: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

interface ProjectTree {
  commit_id: string;
  files: FileItem[];
  ref: string;
}

interface FileItem {
  id: string;
  project_id: string;
  path: string;
  created_at: string;
}

function Repository() {
  const params = useParams();
  const id = params.id;
  const files: FileItem[] = [
    { name: "file1", last_commit: "Initial", date: "2026-03-12" },
    { name: "file2", last_commit: "Added file 2", date: "2026-03-11" },
  ];
  const [project, setProject] = useState<Project>();
  const [projectTree, setProjectTree] = useState<ProjectTree | null>();

  useEffect(() => {
    const getProject = async () => {
      if (!params.id) {
        return;
      }
      const json = await Projects.getProject(params.id);
      setProject(json);
    };

    const getProjectTree = async () => {
      if (!params.id) {
        return;
      }
      try {
        const json = await Projects.getProjectTree(params.id);
        setProjectTree(json);
      } catch {
        setProjectTree(null);
      }
    };
    getProject();
    getProjectTree();
  }, [id]);

  if (!project) {
    <div className="navbar-container">
        <Navbar></Navbar>
    </div>
    return;
  }

  return (
    <>
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>

      <div className="repository-container">
        
        <div className="repository-header-container">
          <div className="repository-name">{project?.name}</div>
          {/* <div>{JSON.stringify(projectTree)}</div> */}
        </div>
        <div className="repository-main">
          <div className="repository-main-left">
            <div className="repository-options-container">
              <div className="branch-selector">{projectTree?.ref}</div>
              <div className="repository-commits">
                <Link className="plain-link" to={`/commits/${id}`}>Commits</Link>
              </div>
            </div>
            <div className="repository-file-container">
              <div className="repository-file-header">
                <div>First</div>
                <div>Last</div>
              </div>
              {projectTree?.files.map((file) => (
                <div key={file.id} className="repository-file">
                  <div className="file-name">{file.path}</div>
                  {/* <div className="file-last-commit">{file.last_commit}</div> */}
                  <div className="file-date">
                    {getRelativeTime(file.created_at)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="repository-about">
            <div className="repository-about-header">About</div>
            <div className="repository-description">{project?.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Repository;
