import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/reset.css";
import "./assets/css/global.css";

import Home from "./view";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
