import Task from "../schemas/task.schema";

const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (err) {
    throw err;
  }
};

const addTask = async (taskData: any) => {
  try {
    const newTask = await new Task(taskData);
    if (!newTask) throw new Error("No task being added");
    await newTask.save();
    return newTask;
  } catch (err) {
    throw err;
  }
};

const removeTask = async (taskID: string) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskID);
    if (!deletedTask) throw new Error("No task being deleted");
    return deletedTask;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const editTask = async (taskID: string, updatedData: any) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskID, updatedData, {
      new: true,
      runValidators: true,
    }).lean();
    if (!updatedTask) throw new Error("No task being updated");

    return updatedTask;
  } catch (err) {
    console.log("eerr", err);

    throw err;
  }
};

const tasksService = { editTask, removeTask, addTask, getAllTasks };

export default tasksService;
