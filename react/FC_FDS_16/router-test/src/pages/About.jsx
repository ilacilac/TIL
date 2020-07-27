import React from "react";
import queryStirng from "query-string";
import { Redirect } from "react-router-dom";

export default function About(props) {
  // const name = new URLSearchParams(props.location.search).get("name");
  const { name } = queryStirng.parse(props.location.search);
  if (name === undefined) {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  if (name === "redirect") {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>About : {name}</h1>
    </div>
  );
}
