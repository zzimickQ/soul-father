import { auth } from "../auth";

type AuthSession = typeof auth.$Infer.Session;

// type definition for express request with session and user
declare module "express-serve-static-core" {
  export interface Request {
    session: AuthSession['session'];
    user: AuthSession['user'];
  }
}
