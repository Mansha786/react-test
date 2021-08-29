import './App.css';
import logo from './assets/images/logo.png';
import pie from './assets/images/pie-chart.png';
import client from './assets/images/user.png';
import document from './assets/images/file-text.png';
import set from'./assets/images/set.png';
import align from './assets/images/align-left.png';
import logout from './assets/images/log-out.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Categories from './components/Categories';
function App() {
  return (
    <Router>
      <div className="d-flex">
        
        <div className="d-flex flex-column justify-content-between sidenav ">
          <div>
            <div className="logo">
            <img src={logo}></img>

            </div>
            <div className="nav-list">
            <img src={pie}></img>
            <span>Home</span>
            </div>
            <div className="nav-list">
            <img src={client}></img>
            <span>Clients</span>

            </div>
            <div className="nav-list">
            <img src={document}></img>
            <span>Document Bank</span>

            </div>
            <div className="nav-list">
            <img src={align}></img>
            <span>Questionnaire Bank</span>

            </div>
          </div>
          <div style={{marginBottom:'80px'}}>
          <div className="nav-list2">
            <img src={set}></img>
            <span>Settings</span>

            </div>
            <div className="nav-list2">
            <img src={logout}></img>
            <span>Log Out</span>

            </div>
          </div>
        </div>
        <div style={{marginLeft:'180px', width:'100%'}}>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route> */}
          <Route path="/">
            <Categories />
          </Route>
        </Switch>
        </div>
      </div>

        
      
    </Router>
  );
}


export default App;
