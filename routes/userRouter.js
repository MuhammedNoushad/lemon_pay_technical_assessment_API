const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.post("/login", userController.loginUser);
userRouter.post("/signup", userController.signupUser);
userRouter.get("/task", userController.getTasks);
userRouter.post("/task", userController.createTask);
userRouter.put("/task/:id", userController.updateTask);
userRouter.delete("/task/:id", userController.deleteTask);
userRouter.get("/task/:id", userController.getTaskById);

module.exports = userRouter;
