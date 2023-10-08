import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};
app.post(
  "/users",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("이름을 입력해!")
      .isLength({ min: 2, max: 10 })
      .withMessage("이름은 두글자 이상!"),
    body("age")
      .notEmpty()
      .withMessage("나이를 입력해!")
      .isInt()
      .withMessage("숫자를 입력해!"),
    body("email").isEmail().withMessage("이메일 입력해!"),
    body("job.name").notEmpty,
    validate,
  ],
  (req, res, next) => {
    // 유효성검사를 아래와같이 일일히 해주는걸 간편하게 해주는 라이브러리 -> express-validator
    // if (req.body.email ...) {
    // res.status(400).send({message: 'mail!!!'}) ...
    // }

    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("이메일 입력해!"), validate],
  (req, res, next) => {
    res.send("💌");
  }
);

app.listen(8080);
