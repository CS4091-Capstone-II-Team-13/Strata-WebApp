// import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import "./Repository.css";

interface FileItem {
    name: string;
    last_commit: string;
    date: string;
}

function Repository() {
    const files: FileItem[] = [
        {name: "file1", last_commit: "Initial", date:"2026-03-12"},
        {name: "file2", last_commit: "Added file 2",date: "2026-03-11"}
    ]
    return (
        <>
            <div className="navbar-container">
                <Navbar></Navbar>
            </div>

            <div className="repository-container">
                <div className="repository-header-container">
    <div className="repository-name">
                        Repository
                    </div>
                </div>
                
                <div className="repository-file-container">

                
                <div className="repository-file-header">
                    <div>
                        First
                    </div>
                    <div>
                        Last
                    </div>
                </div>
                {files.map((file) => (
                <div className="repository-file">
                    <div className="file-name">
                        {file.name}
                    </div>
                    <div className="file-last-commit">
                        {file.last_commit}
                    </div>
                    <div className="file-date">
                        {file.date}
                    </div>
                </div>
                ))}
                </div>
                
            </div>
        </>
    );
}

export default Repository;
