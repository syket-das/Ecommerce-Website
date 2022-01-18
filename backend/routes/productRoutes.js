import express from 'express';
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

// @desc      Featch all products
// @route     GET /api/products
// @access    Public
router.route('/').get(getProducts);

// @desc      Featch Single product
// @route     GET /api/products/:id
// @access    Public
router.route('/:id').get(getProductById);

export default router;
