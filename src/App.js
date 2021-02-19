import logo from './logo.svg';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import General from "./components/General";


function App() {
  return (
      <Router>

          <Switch>
              <Route exact path="/" component={General} />
          </Switch>

        {/*<div className="App">*/}
        {/*  <header className="App-header">*/}
        {/*    <img src={logo} className="App-logo" alt="logo" />*/}
        {/*    <p>*/}
        {/*      Edit <code>src/App.js</code> and save to reload.*/}
        {/*    </p>*/}
        {/*    <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://reactjs.org"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      Learn React*/}
        {/*    </a>*/}
        {/*  </header>*/}
        {/*</div>*/}
      </Router>
  );
}

export default App;
