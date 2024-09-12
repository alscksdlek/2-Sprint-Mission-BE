import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    favoriteCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
