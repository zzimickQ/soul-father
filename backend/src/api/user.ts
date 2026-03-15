import { Router } from "express";
import { isAdmin } from "../middlewere";

const router = Router();

router
  .get("/me", async (req, res) => {
    return res.json(req.user.email);
  })
  .get("/account",isAdmin, async (req, res) => {
    return res.json("Yes");
  });

export default router;
