import express from "express";
import auth from "../middlewares/auth.middleware";
import validation from "../middlewares/validation.middleware";

const userController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.get("/", userController.getAllUsers);
usersRouter.post(
  "/new",
  validation.userNewValidation,
  userController.createUser
);
usersRouter.post(
  "/login",
  validation.userLoginValidation,
  userController.loginUser
);
usersRouter.post("/logout", auth, userController.logoutUser);

export default usersRouter;
