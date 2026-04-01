import express from "express";
import {
    deleteProductsController,
    saveProductsController,
    getProductsController,
    updateProductsController,
} from  "../Controller/Product.js";

const router = express.Router();

router .get ("/:id", getProductsController);
router .post("/:id", saveProductsController);
 router .put ("/:id", updateProductsController);
router .delete("/:id",deleteProductsController);

export default productrouter;