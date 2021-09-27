import "./assets/css/reset.css";
import "./assets/css/global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Header/Nav/Nav";
import Menu from "./components/Header/Menu/Menu";

function App() {
  return (
    <Router className="container">
      <Switch>

        <Route exact path="/">
          <Nav />
          <Menu />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
