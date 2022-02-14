import { Router } from "express";
import { checkout, isLoged } from "../controllers/checkoutController.js";
import validateToken from '../middleware/validateToken.js'

const checkoutRouter = Router();

checkoutRouter.get('/checkout', validateToken, isLoged);
checkoutRouter.post('/checkout', validateToken, checkout);
// checkoutRouter.get('/favorites',validateToken, favoriteProducts);
// checkoutRouter.get('/historic',validateToken, historicProducts);

export default checkoutRouter;