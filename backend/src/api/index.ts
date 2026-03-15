import { Router } from "express";
import { isAuthenticated } from "../middlewere";
import user from "./user";
const router = Router();

router.use("/user", isAuthenticated, user);

export default router;
