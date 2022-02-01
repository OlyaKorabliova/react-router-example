import { BrowserRouter, Link } from "react-router-dom";
import RegisteredRoutes from "./components/RegisteredRoutes";
import MainNavActions from "./MainNavActions";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <MainNavActions />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <RegisteredRoutes />
    </BrowserRouter>
  );
}

export default App;
