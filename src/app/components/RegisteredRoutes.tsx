import { Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Topics from "./Topics/Topics";

function RegisteredRoutes() {
  const isAuthenticated = true;

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      {isAuthenticated ? (
        <Route path="/topics">
          <Topics />
        </Route>
      ) : (
        <Route path="/topics" render={() => <h1>Please log in</h1>} />
      )}
      <Route path="/" exact>
        <Home />
      </Route>
      <Route render={() => <h1>404: This page is not found</h1>} />
    </Switch>
  );
}

export default RegisteredRoutes;
