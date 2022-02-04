import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Topic from "./Topics/Topic";
import Topics from "./Topics/Topics";

function RegisteredRoutes() {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/about" element={<About />} />
      {isAuthenticated ? (
        <Route path="/topics" element={<Topics />}>
          <Route path=":topicId" element={<Topic />} />
          <Route index element={<h3>Please select a topic.</h3>} />
        </Route>
      ) : (
        <Route path="/topics" element={<h1>Please log in</h1>} />
      )}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404: This page is not found</h1>} />
    </Routes>
  );
}

export default RegisteredRoutes;
