import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // REST API -> BODY
app.use(express.urlencoded({ extended: false })); // HTML Form -> BODY
app.use(express.static("public"));

app.use("/posts", postRouter);
app.use("/users", userRouter);

// app
//   .route("/posts")
//   .get((req, res, next) => {
//     res.status(201).send("GET: /posts");
//   })
//   .post((req, res) => {
//     res.status(201).send("POST : /posts");
//   });

app.listen(8080);
