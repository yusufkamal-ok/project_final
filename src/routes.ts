import express from "express";

import uploadMiddleware from "./middlewares/upload.middleware";
import uploadController from "./controllers/upload.controller";
import productsController from "./controllers/products.controller";
import categoryController from "./controllers/category.controller";
import authController from "./controllers/auth.controller";
import authMiddleware from "./middlewares/auth.middleware";
import orderController from "./controllers/order.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.add);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/category", categoryController.findAll);
router.post("/category", categoryController.create);
router.get("/category/:id", categoryController.findOne);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.get("/auth/me",authMiddleware,authController.me);
router.put("/auth/profile", authMiddleware, authController.profile);

router.post("/order",orderController.add);
router.get("/order",orderController.findAll);

export default router;
