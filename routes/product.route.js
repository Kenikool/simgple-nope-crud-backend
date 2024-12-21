const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/:id", createProduct);
router.get("/:id", updateProduct);
router.get("/:id", deleteProduct);

module.exports = router;
