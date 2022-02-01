import { Route, Switch, useRouteMatch } from "react-router-dom";
import Topic from "./Topic";

function TopicsRoutes() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:topicId`}>
        <Topic />
      </Route>
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  );
}

export default TopicsRoutes;
