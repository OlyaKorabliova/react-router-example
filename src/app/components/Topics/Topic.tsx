import { useParams } from "react-router-dom";

function Topic() {
  const params: { topicId: string } = useParams();

  return <h3>Selected topic ID: {params.topicId}</h3>;
}

export default Topic;
