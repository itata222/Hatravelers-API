import { NextFunction, Request, Response } from "express";
import { ok } from "../utils/responses.utils";
import tasksService from "../services/tasks.service";

const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await tasksService.getAllTasks();
    ok(res, "Tasks: ", data);
  } catch (err) {
    next(err);
  }
};

const addTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await tasksService.addTask(req.body);
    ok(res, "Task added successfully ", data);
  } catch (err) {
    next(err);
  }
};

const removeTask = async (req: Request, res: Response, next: NextFunction) => {
  const taskID: string = (req.query.taskId as string) || "";
  try {
    const data = await tasksService.removeTask(taskID);
    ok(res, "Tasks removed successfully ", data);
  } catch (err) {
    next(err);
  }
};

const editTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { taskID, updatedData } = req.body;

    const data = await tasksService.editTask(taskID, updatedData);
    ok(res, "Task edited successfully ", data);
  } catch (err) {
    console.log(err);

    next(err);
  }
};

const tasksController = { getTasks, addTask, removeTask, editTask };

export default tasksController;
