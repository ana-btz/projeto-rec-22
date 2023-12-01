import { Router } from "express";
import { userSchema } from "schemas";
import { createUser } from "controllers";
import { validateBody } from "middlewares";

const userRouter = Router();

userRouter.post('/', validateBody(userSchema), createUser);

export { userRouter };