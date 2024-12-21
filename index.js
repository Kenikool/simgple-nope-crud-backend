const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controller/product.controller");
const app = express();
dotenv.config();

// middleware
app.use(express.json());
// to use urlencoded
app.use(express.urlencoded({ extended: true }));

// routes

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! This is a simple Express.js app.");
});

// put request
// get request
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  getting a single product
app.get("/api/products/:id", getProduct);
// post request
app.post("/api/products", createProduct);

// update request
app.put("/api/products/:id", updateProduct);

// delete request
app.delete("/api/products/:id", deleteProduct);

// mongoose connection
mongoose
  .connect(
    "mongodb+srv://princechaawa:princechaawa12345@backenddb.eczx7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
