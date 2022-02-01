import { Redirect, useParams } from "react-router-dom";

const ALLOWED_ROUTES = ["react-docs", "react-router-docs"];

function Topic() {
  const params: { topicId: string } = useParams();

  if (ALLOWED_ROUTES.includes(params.topicId)) {
    return <h3>Selected topic ID: {params.topicId}</h3>;
  }

  return <Redirect to="/topics" />;
}

export default Topic;
