import { Navigate, useParams } from "react-router-dom";

const ALLOWED_ROUTES = ["react-docs", "react-router-docs"];

function Topic() {
  const { topicId } = useParams();

  if (topicId && ALLOWED_ROUTES.includes(topicId)) {
    return <h3>Selected topic ID: {topicId}</h3>;
  }

  return <Navigate to="/topics" />;
}

export default Topic;
