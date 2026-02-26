import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="navbar-container">
                <Navbar></Navbar>
            </div>
        </>
    );
}

export default App;
