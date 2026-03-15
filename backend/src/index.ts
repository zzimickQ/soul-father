import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import "dotenv/config";
import express from "express";
import api from "./api";
import { auth } from "./auth";

const app = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(
  cors({
    origin: "*", // TODO: Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

app.use(express.json());

app.use("/api", api);

app.listen(3000, () =>
  console.log("\n🚀 Server ready at: http://localhost:3000"),
);
