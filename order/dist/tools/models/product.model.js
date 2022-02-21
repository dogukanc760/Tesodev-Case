"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Product Name must be unique'],
        required: [true, 'Product Name is required'],
    },
    img: { type: String, default: '' }
}, { timestamps: true });
//# sourceMappingURL=product.model.js.map