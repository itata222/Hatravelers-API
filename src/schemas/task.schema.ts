import mongoose, { Schema } from "mongoose";
import User from "./user.schema";

interface ITask extends Document {
  owner: any;
  isChecked: boolean;
  task: string;
}

const taskSchema = new Schema<ITask>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Must to have an owner"],
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    task: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
