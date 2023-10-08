import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// 어떤요청을 받았는지, 얼마나 걸렸는지 로그
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const corsOption = {
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors(corsOption));

// 공통적으로 필요한 보안에 관련한 헤더속성을 지정함.

app.use(helmet());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Method",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("Welcome!!");
  console.log(req.body);
  console.log(req.cookies);
});

app.listen(8080);
