import { Link, useRouteMatch } from "react-router-dom";
import TopicsRoutes from "./TopicsRoutes";

function Topics() {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/react-docs`}>React docs</Link>
        </li>
        <li>
          <Link to={`${match.url}/react-router-docs`}>React Router docs</Link>
        </li>
      </ul>
      <TopicsRoutes />
    </div>
  );
}

export default Topics;
