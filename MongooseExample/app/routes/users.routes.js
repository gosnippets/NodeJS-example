import express from "express";
import usersServices from "../services/users.services.js";
import authMiddleware from "../middlewares/auth/authMiddleware.js";

const usersRouter = express.Router();

usersRouter.post("/", usersServices._createUser);
usersRouter.post("/login", usersServices._loginUser);

usersRouter.get("/", usersServices._getAllUsers);
usersRouter.get("/:id", usersServices._getUserById);
usersRouter.get("/email/:email", usersServices._getUserByEmail);
usersRouter.put("/:id", usersServices._updateUser);
usersRouter.delete("/:id", usersServices._deleteUser);

export default usersRouter