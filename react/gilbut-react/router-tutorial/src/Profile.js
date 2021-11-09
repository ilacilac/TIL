import React from "react";
import { useParams } from "react-router-dom";

const data = {
  ming: {
    name: "민지",
    description: "~ _~",
  },
  angdoong: {
    name: "앵둥",
    description: "멍",
  },
};

const Profile = ({ match }) => {
  // const { username } = match.params;
  // const profile = data[username];

  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
