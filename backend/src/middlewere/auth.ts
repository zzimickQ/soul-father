import { Handler } from "express";
import HttpStatus from "http-status";
import { auth } from "../auth";

export const isAuthenticated: Handler = async (req, res, next) => {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });
    if (!session) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
    }
    req.session = session.session;
    req.user = session.user;
    next();
  } catch (error) {
    return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
  }
};

export const isAdmin: Handler = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(HttpStatus.FORBIDDEN).json({ message: "Forbidden" });
  }
};
