import express from "express";

const app = express();

app.all("/api", (req, res, next) => {
  // 명확하게 /api 에서만 작동
  console.log("all");
  next();
});

app.use("/sky", (req, res, next) => {
  // 하위 파라미터에서도 동작
  // ex) /sky/1
  console.log("use");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("First1");
    // next("route");
    next(new Error("first"));
  },
  (req, res, next) => {
    console.log("First2");
    next();
  }
);

// 어떤 경로든
app.use((req, res, next) => {
  res.status(404).send("Not available! @ _@");
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later");
});

app.get("/", (req, res, next) => {
  console.log("Second");
});

// POST

app.use(express.json());
app.post("/", (req, res, next) => {
  console.log(req.body); // undefined
  // body를 읽기위해서 미들웨어 사용 -> app.use(express.json())
});

// app.get("/sky/:id", (req, res, next) => {
//   console.log(req.params);
//   console.log(req.params.id);
//   console.log(req.query);
//   console.log(req.query.keyword);

//   // res.send("Hi!");
//   // res.json({ name: "Ming" });
//   res.setHeader("key", "value");
//   res.status(201).send("created");
// });

app.listen(8080);

/*
use, all : 모든 http method 
use :
all :
 */
