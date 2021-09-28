import "./assets/css/reset.css";
import "./assets/css/global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <Router className="container">
      <Switch>

        <Route exact path="/">
          <Cabecalho />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
