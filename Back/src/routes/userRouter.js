import { Router } from "express";
import { validateSignUpSchema } from "../middleware/validateSignUpSchema.js";
import signUp from "../controllers/UserController.js";

const userRouter = Router();

userRouter.post('/signup', validateSignUpSchema,signUp);

export default userRouter;