import { useHistory } from "react-router-dom";

function MainNavActions() {
  const history = useHistory();

  const goHome = () => {
    history.push("/home");
  };

  const goNext = () => {
    history.goForward();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <button onClick={goBack}>{"<"}</button>
      <button onClick={goHome}>Home</button>
      <button onClick={goNext}>{">"}</button>
    </>
  );
}

export default MainNavActions;
