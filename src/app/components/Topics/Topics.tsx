import { Link, Outlet } from "react-router-dom";

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={"react-docs"}>React docs</Link>
        </li>
        <li>
          <Link to={"react-router-docs"}>React Router docs</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Topics;
