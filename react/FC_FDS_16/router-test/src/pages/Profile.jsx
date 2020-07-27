import React from "react";

export default function Profile(props) {
  const id = Number(props.match.params.id);
  if (isNaN(id)) {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Profile : {id}</h1>
    </div>
  );
}
