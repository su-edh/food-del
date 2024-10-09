import express from "express"
import authMiddleware from "../middleware/auth";
import { placeOrder, verifyOrder } from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder);

export default orderRouter;