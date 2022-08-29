const express = require("express");
const {
  getProduct,
  getProducts,
} = require("../controllers/productsController");
const Products = require('../models/ProductModel');
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

router.post("/products", async (req, res) => {
  const { name, image, description, brand, category, price, countInStock, rating, numReviews } = req.body;

  try{
    let products = await Products.findOne({ name });
        if (products) {
            res.status(400).json({ errors: [{ msg: 'Product already exists' }] });
        }

        products = new Products({
          name, image, description, brand, category, price, countInStock, rating, numReviews

        });
        await products.save();
        res.send('User Registered successfully');
      
      }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
  }
} )

module.exports = router;
