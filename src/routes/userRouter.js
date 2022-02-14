import { Router } from "express";
import { validateSignUpSchema } from "../middleware/validateSignUpSchema.js";
import signUp from "../controllers/UserController.js";
import favoriteProducts, { addFavorites, deleteFavorite} from "../controllers/favoritesController.js";
import  purchasedItems from "../controllers/historicController.js";
import validateToken from '../middleware/validateToken.js'


const userRouter = Router();

userRouter.post('/signup', validateSignUpSchema,signUp);
userRouter.get('/favorites',validateToken, favoriteProducts);
userRouter.post('/favorites',validateToken, addFavorites);
userRouter.delete('/favorites',validateToken, deleteFavorite);
userRouter.post('/purchase',validateToken,purchasedItems);

export default userRouter;