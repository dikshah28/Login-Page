import express from "express";


const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err.message });
  }
});

// Get Tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err.message });
  }
});

// Delete Task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json("Task deleted");
  } catch (err) {
    res.status(500).json({ message: "Error deleting task", error: err.message });
  }
});

export default router;