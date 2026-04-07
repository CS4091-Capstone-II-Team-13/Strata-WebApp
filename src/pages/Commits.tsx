// import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import { useParams } from "react-router";
import "./Commits.css";
import { useState, useEffect } from "react";
import Projects from "../services/Projects.ts";
import { getRelativeTime } from "../utils/utils.ts";

interface Commit {
  id: string;
  project_id: string;
  parent_ids: string[];
  author_id: string;
  message: string;
  created_at: string;
}

function Commits() {
  const params = useParams();
  const id = params.id;
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    const getProjectCommits = async () => {
      if (!id) {
        return;
      }
      const json = await Projects.getProjectCommits(id);
      setCommits(json);
    };
    getProjectCommits();
  }, [id]);

  return (
    <>
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>

      <div className="commits-container">
        <div className="commits-header-container">
          <div className="commits-name">Commits</div>
        </div>
        <div className="commits-main">
          {commits && commits.map((commit) => (
            <div className="commits-commit">
              <div className="commits-message">{commit.message}</div>
              <div className="commits-author">Author: {commit.author_id}</div>
                <div className="commits-author">Committed: {getRelativeTime(commit.created_at)}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Commits;
