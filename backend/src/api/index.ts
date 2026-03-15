import { Router } from "express";
import { isAuthenticated } from "../middlewere";
import user from "./user";

const api = Router();

api.use("/user", isAuthenticated, user);

export { api };
