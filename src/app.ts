import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import usersRouter from "./routers/users.router";
import { notFound } from "./utils/responses.utils";
import { errorHandler } from "./middlewares/errors.middleware";
import tasksRouter from "./routers/tasks.router";
import destinationsRouter from "./routers/destinations.router";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", async (_: Request, res: Response) => res.send("NodeJS"));

app.use("/users", usersRouter);
app.use("/destinations", destinationsRouter);
app.use("/tasks", tasksRouter);

app.all("*", async (_: Request, res: Response) => notFound(res));

app.use(errorHandler);

export default app;
