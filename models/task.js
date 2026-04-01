import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;