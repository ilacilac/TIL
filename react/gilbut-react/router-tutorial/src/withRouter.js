import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const WithRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(location);

  return (
    <div>
      <h4>Location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows="7"
        readOnly={true}
      />
      <h4>Match</h4>
      <textarea
        value={JSON.stringify(params, null, 2)}
        rows="7"
        readOnly={true}
      />
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </button>
    </div>
  );
};

export default WithRouter;
