import { Link, Route, BrowserRouter } from "react-router-dom";
import {Routes} from "react-router";

import {Home} from "./pages/Home";
import {Map} from "./pages/Map";

function App() {
  return (
      <div>
          <div id="top-label">
              <span id="hallo">Your hairdressers salon in TTHK</span>
          </div>
          <div id="top-content">
              <div id="nav-div">
                  <img src="images/Logo.png" alt=" " id="logo"/>

                  <nav id="navigation-panel">
                      <Link to="/Home" className="underline">Home</Link>
                      <Link to="/Map" className="underline">Map</Link>
                  </nav>
                  <Routes>
                      <Route path="/Home" component={Home}/>
                      <Route path="/Map" component={Map}/>
                      <Route path="*" component={NotFound}/>
                  </Routes>
              </div>
          </div>
      </div>
  );
}
// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>,
//         console.log("Что за хрень")
//     );
// }
//
// function Map() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

function NotFound(){
    return(
        <div>
            <h1>Error</h1>
        </div>
    )
}

export default App;
