import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/reset.css";
import "./assets/css/global.css";

import Cabecalho from "./components/Cabecalho";
import Carousel from "./components/Carousel";
import BannerSecundario from "./components/BannerSecundario";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <main className="container">
            <Cabecalho />
            <Carousel />
            <BannerSecundario />
          </main>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
