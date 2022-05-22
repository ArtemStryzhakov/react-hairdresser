import { BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import Home from "./pages/Home";
import MapPage from './pages/Map' ;
import Table from "./pages/Table";
import LoginForm from "./pages/login";

function App() {
  return (
    <BrowserRouter>
    <div>
        <div id="top-label">
            <span id="hallo">Your hairdressers salon in TTHK</span>
        </div>
        <div id="top-content">
            <div id="nav-div">
                <img src="images/Logo.png" alt=" " id="logo"/>

                <nav id="navigation-panel">
                    <NavLink to="/Home"  className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Home</NavLink>
                    <NavLink to="/Table" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Table</NavLink>
                    <NavLink to="/Map" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Map</NavLink>
                    <NavLink to="/Login" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Login</NavLink>
                </nav>

            </div>
        </div>
        <div id={"content"}>
            <Routes>
                <Route path="/Home" element={< Home />}/>
                <Route path="/Table" element={< Table />}/>
                <Route path="/Map" element={< MapPage />}/>
                <Route path="/Login" element={< LoginForm />}/>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
