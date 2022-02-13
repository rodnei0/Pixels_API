import { Router } from "express";
import { validateSignUpSchema } from "../middleware/validateSignUpSchema.js";
import signUp from "../controllers/UserController.js";
import favoriteProducts from "../controllers/favoritesController.js";
import historicProducts from "../controllers/historicController.js";
import validateToken from '../middleware/validateToken.js'
import addFavorites from '../controllers/favoritesController.js'

const userRouter = Router();

userRouter.post('/signup', validateSignUpSchema,signUp);
userRouter.get('/historic',validateToken, historicProducts);
userRouter.get('/favorites',validateToken, favoriteProducts);
userRouter.post('/favorites',validateToken,addFavorites );

export default userRouter;