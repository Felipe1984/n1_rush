import "./assets/css/reset.css";
import "./assets/css/global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Header/Menu/Menu";

function App() {
  return (
    <Router className="container">
      <Switch>

        <Route>
          <Menu exact path="/" />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
