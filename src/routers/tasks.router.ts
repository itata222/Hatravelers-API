import express from "express";
import auth from "../middlewares/auth.middleware";
import validation from "../middlewares/validation.middleware";
import tasksController from "../controllers/tasks.controller";

const tasksRouter = express.Router();

tasksRouter.get("/", tasksController.getTasks);
tasksRouter.post(
  "/new",
  //   validation.tasksNewValidation,
  tasksController.addTask
);
tasksRouter.delete(
  "/remove",
  //   validation.tasksValidation,
  tasksController.removeTask
);
tasksRouter.patch("/edit", tasksController.editTask);

export default tasksRouter;
