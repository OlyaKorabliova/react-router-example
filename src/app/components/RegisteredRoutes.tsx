import { Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Topics from "./Topics/Topics";

function RegisteredRoutes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default RegisteredRoutes;
