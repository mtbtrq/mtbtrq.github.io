import NavBar from "./components/NavBar";
import MainPage from "./components/mainPage";
import Projects from "./Projects";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;