import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server"; // SSR용도로 사용되는 라우터. props로 넣어주는 location값에 따라 라우팅
import App from "./App";
import path from "path";
import fs from "fs";

const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key))
  .map((key) => `<script src="${manifest.files[key]}"></script>`)
  .join("");

function createPage(root) {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
        <link href="${manifest.files["main.css"]}" rel="stylesheet" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          ${root}
        </div>
        <script src="${manifest.files["runtime-main.js"]}"></script>
        ${chunks}
        <script src="${manifest.files["main.js"]}"></script>
      </body>
    </html>
  `;
}

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
  res.send(createPage(root)); // response
};

const serve = express.static(path.resolve("./build"), {
  index: false, // "/" 경로에서 index.html 보여주지 않게
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
