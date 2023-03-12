import express from "express";
import chefRouter from "./chefs.routes";
import DishRouter from "./dishes.routes";
import restaurantRouter from "./restaurants.routes";

const router = express.Router();

router.use("/api/chefs", chefRouter);
router.use("/api/restaurants", restaurantRouter);
router.use("/api/dishes", DishRouter);

export default router;
