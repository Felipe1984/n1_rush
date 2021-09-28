import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/reset.css";
import "./assets/css/global.css";

import Cabecalho from "./components/Cabecalho";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Cabecalho />
          <Carousel />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
