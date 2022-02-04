import { useNavigate } from "react-router-dom";

function MainNavActions() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  const goNext = () => {
    navigate(1);
  };

  const goBack = () => {
    navigate(-1);
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
