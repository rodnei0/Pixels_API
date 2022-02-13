import { Router } from "express";
import { validateSignUpSchema } from "../middleware/validateSignUpSchema.js";
import signUp from "../controllers/UserController.js";
import favoriteProducts from "../controllers/favoritesController.js";
import historicProducts from "../controllers/historicController.js";
import validateToken from '../middleware/validateToken'

const userRouter = Router();

userRouter.post('/signup', validateSignUpSchema,signUp);
userRouter.get('/favorites',validateToken, favoriteProducts);
userRouter.get('/historic',validateToken, historicProducts);

export default userRouter;