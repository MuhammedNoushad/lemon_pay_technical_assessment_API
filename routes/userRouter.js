const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

userRouter.post("/login", userController.loginUser);
userRouter.post("/signup", userController.signupUser);

userRouter.get("/task", authenticateToken, userController.getTasks);
userRouter.post("/task", authenticateToken, userController.createTask);
userRouter.put("/task/:id", authenticateToken, userController.updateTask);
userRouter.delete("/task/:id", authenticateToken, userController.deleteTask);
userRouter.get("/task/:id", authenticateToken, userController.getTaskById);

module.exports = userRouter;
