import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server"; // SSR용도로 사용되는 라우터. props로 넣어주는 location값에 따라 라우팅
import App from "./App";

// SSR rendering handler function
const app = express();

const serverRender = (req, res, next) => {
  // 404떠야하는 상황에 404띄우지 않고 SSR

  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx); // rendering
  res.send(root); // response
};

app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
